import React from 'react';
import './App.css';
import Signin from './components/client/auth/login/Signin';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/client/auth/signup/Signup';
import PhoneOtp from './components/client/auth/phoneotp/PhoneOtp';
import EmailOtp from './components/client/auth/emailotp/EmailOtp';
import Home from './components/home/Home'
import Success from './components/client/Payment/success/success';
import Cancel from './components/client/Payment/Cancel/cancel';
import Stripe from './components/client/Payment/payment/stripe';
import Payment from './components/client/Payment/payment/payment'; 
// import Navbar from './components/common/navbar/navbar';
import HomeUI from './components/homeui/home';
import AdminRouting from './components/admin/home/adminRouting';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Signin}></Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={HomeUI} />
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/email-otp" component={EmailOtp}></Route>
        <Route exact path="/phoneotp" component={PhoneOtp}></Route>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/success" component={Success}></Route>
        <Route exact path="/cancel" component={Cancel}></Route>
        <Route exact path="/stripe" component={Stripe}></Route>
        <Route exact path="/payment" component={Payment}></Route>
        < AdminRouting />
      </Switch>
    </div>
  );
}

export default App;
