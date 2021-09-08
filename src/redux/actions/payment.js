import { PAYMENT } from '../constants';
import { loadStripe } from '@stripe/stripe-js';
import swal from 'sweetalert';
import jwt from 'jwt-decode';
const stripePromise = loadStripe(
  'pk_test_51JQXbbSJLdxp0VOUVTomDEmGOfkVgd1RpkzHhza8TEWyYJNjHa9NhYf8UMsmVs7vcMK2zGipePyetTTgkVbbIwwI00vsIVC2Cb'
);

export const AddPayment = () => async (dispatch) => {
  try {
    const user = jwt(localStorage.getItem('token'));
    const stripe = await stripePromise;
    // const formData = {
    //     slot : id,
    //     client : user.id,
    // }
    const response = await api.payment(formData);
    const session = response.data;
    const user = response.data;
    console.log(session);
    console.log(user);
    localStorage.setItem('session', session.id);
    localStorage.setItem('user', user.id);
    let result;
    setTimeout(async () => {
      result = await stripe.redirectToCheckout({
        sessionId: session.id,
        userId: user.id
      });
    }, 2000);
    if (result?.error) {
      swal({
        text: result.error.message,
        icon: 'error'
      });
    }
    dispatch({ type: PAYMENT, response });
  } catch (e) {
    console.log(e);
    swal({
      text: 'Something went wrong',
      icon: 'error'
    });
  }
};
