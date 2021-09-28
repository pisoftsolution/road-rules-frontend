import React from 'react';
import './App.css';
import Signin from './components/client/auth/login/signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './History';
import Signup from './components/client/auth/signup/signup';
import PhoneOtp from './components/client/auth/phoneotp/phoneOtp';
import EmailOtp from './components/client/auth/emailotp/emailOtp';
import Success from './components/client/Payment/success/success';
import Cancel from './components/client/Payment/Cancel/cancel';
import Stripe from './components/client/Payment/payment/stripe';
import Payment from './components/client/Payment/payment/payment';
// import Navbar from './components/common/navbar/navbar';
import OTPBox from './components/client/auth/otp/otp';
import Home from './components/client/home/home';
import Navbars from './components/common/navbar/Navbar';
// import Navbar from './components/common/Navbar1/navbar';
// import HomeItem from './components/common/items/homeItem';
// import Booking from './components/common/items/bookingItem';
// import ContactUs from './components/common/items/conatactUs';
// import ContactLogo from './components/common/items/contactLogo';
// import NavbarRouting from './components/common/navbarRouting';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Router history={history}>
        {/* <NavbarRouting /> */}
        <Switch>
          <Route exact path="/" component={Signin}></Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/phoneotp" component={PhoneOtp}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/email-otp" component={EmailOtp}></Route>
          <Route exact path="/success" component={Success}></Route>
          <Route exact path="/cancel" component={Cancel}></Route>
          <Route exact path="/stripe" component={Stripe}></Route>
          <Route exact path="/payment" component={Payment}></Route>
          <Route exact path="/otp" component={OTPBox}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
