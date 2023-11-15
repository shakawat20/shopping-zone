import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = ({ price }) => {
  const { user, logOut } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [clientSecret, setClientSecret] = useState('');
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    if (price) {
      fetch('https://shopping-zone-server.vercel.app/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        setError('An error occurred while processing your payment.');
        return;
      }

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      });

      if (confirmError) {
        setError('An error occurred while confirming your payment.');
      } else if (paymentIntent.status === 'succeeded') {
        fetch("https://shopping-zone-server-loq2zoo8v-shakawat20.vercel.app/order",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({user:user,price:price}),
        })
        setSuccess('Payment succeeded!');
        setTransaction(paymentIntent.id);
      }
    } catch (error) {
      setError('An error occurred while processing your payment.');
    }
  };

  return (
    
    <div style={{width:"400px",borderRadius:"10px"}}>
      <form onSubmit={handleSubmit}>
        <div>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '18px',
                 
                  '::placeholder': {
                    color: 'black',
                  },
                  backgroundColor: 'white',
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <div className='flex justify-center'>
           <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!stripe || !elements}
        >
          Pay
        </button>
        </div>
       
      </form>
      <div className="mt-4">{transaction}</div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
};

export default CheckoutForm;
