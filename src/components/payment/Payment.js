import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CheckoutForm from '../checkoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../hooks/useCart';
const stripePromise = loadStripe("pk_test_51ND8OoBH3R7X5Kq3nuY3sbq3MnyL7O4ZppvMpZoCANMGXYzyMjVDoJfoVZDSvFuk5L3E5OPi5L46x21vuzwDsxV0005AAEeWGa");

const Payment = () => {

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


  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (sum) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: sum }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
    // Create PaymentIntent as soon as the page loads

  }, [sum]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div style={{ marginBottom: "24px",display:"flex",justifyContent:"center", backgroundColor: "#282c34"  ,border:"2px solid blue"}}>
      <div>{clientSecret && (
        <Elements style={{ height: "10px", width: "1000px" }} options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}</div>
      
    </div>
  );
};

export default Payment;
