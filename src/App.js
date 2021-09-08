import React from 'react';
import './App.css';
import Success from './components/client/Payment/success/success';
import Cancel from './components/client/Payment/Cancel/cancel';
import Stripe from './components/client/Payment/payment/stripe';
import Payment from './components/client/Payment/payment/payment';
// import Navbar from './components/common/navbar/navbar';
import Sidebar from './components/admin/Sidebar';
import About from './components/admin/home/About';
import AboutCards from './components/admin/home/AboutCards';
// import Choice from './components/admin/home/Choose';
import Testimonials from './components/admin/home/Testimonials';
import User from './components/admin/home/User';
import { makeStyles } from "@material-ui/core/styles";
import Instructor from './components/admin/home/Instructor';
import Slots from './components/admin/home/Slots';
import AllRides from './components/admin/home/AllRides';
import Logout from './components/admin/home/Logout';
import Choose from './components/admin/home/Choose';
import OTPBox from './components/client/auth/otp/otp';
import Home from './components/client/home/home';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
    </div>
  );
}

export default App;
