import React from 'react';
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';

//initializing the strip with loadstripe
const stripePromise=loadStripe("pk_test_51JQXbbSJLdxp0VOUVTomDEmGOfkVgd1RpkzHhza8TEWyYJNjHa9NhYf8UMsmVs7vcMK2zGipePyetTTgkVbbIwwI00vsIVC2Cb");

function Payment() {
    // console.log(stripePromise); 
    const handleClick = async () => {
        const stripe = await stripePromise;
            const response = await axios.post(
          "mongodb+srv://root:junaid@cluster0.qxafi.mongodb.net/test");
        const {session , user} = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          session_Id: session.id,
          user_Id:user.id
        });
        if (result.error) {  
            console.log("error");
        }
      };
    return (
    <div >       
        <h4>You have selected T-shirt</h4>
        <h4>Amount: 200 (INR)</h4>
        <p>Once click on pay, you will be redirected to our Payment gateway.</p>
        <button  onClick={handleClick}>
        
        Click here to Pay
        </button>
    </div>
    );
}
export default Payment;

