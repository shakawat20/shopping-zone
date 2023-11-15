import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import CheckoutForm from '../checkoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../hooks/useCart';
import './Payment.css'
import useAuth from '../../hooks/useAuth';
const stripePromise = loadStripe("pk_test_51ND8OoBH3R7X5Kq3nuY3sbq3MnyL7O4ZppvMpZoCANMGXYzyMjVDoJfoVZDSvFuk5L3E5OPi5L46x21vuzwDsxV0005AAEeWGa");

const Payment = () => {

  const { user, logOut } = useAuth()
  let sum = 0;
  let totalQuantity = 0;
  const [cart, setCart] = useCart();


  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }


    sum = sum + product.price * product.quantity
    totalQuantity = totalQuantity + product.quantity
  }






  return (
    
  
    <div>
      
      <Elements stripe={stripePromise}>
        <CheckoutForm price={sum} />
      </Elements>

    </div>


  );
};

export default Payment;