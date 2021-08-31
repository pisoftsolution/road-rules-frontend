import React from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

//initializing the strip with loadstripe
const stripePromise = loadStripe(
  'pk_test_51JQXbbSJLdxp0VOUVTomDEmGOfkVgd1RpkzHhza8TEWyYJNjHa9NhYf8UMsmVs7vcMK2zGipePyetTTgkVbbIwwI00vsIVC2Cb'
);

function Payment() {
  // console.log(stripePromise); 
  const handleClick = async () => {
    const stripe = await stripePromise;
    const response = await axios.post(
      'mongodb+srv://root:junaid@cluster0.qxafi.mongodb.net/test'
    );
    const { session, user } = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
      userId: user.id
    });
    if (result.error) {
      console.log('error');
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Click here to Pay</button>
    </div>
  );
}
export default Payment;
