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
import Booking from './components/common/navbar/booking';
import Contact from './components/common/items/conatactUs';
import ContactLogo from './components/common/items/contactLogo';
import UserProfile from './components/common/items/userprofile';
import AddAddress from './components/common/items/addaddress';
import Classes from './components/common/items/classes';

// import Navbar from './components/common/Navbar1/navbar';
// import HomeItem from './components/common/items/homeItem';
// import Booking from './components/common/items/bookingItem';
// import ContactUs from './components/common/items/conatactUs';
// import ContactLogo from './components/common/items/contactLogo';
// import NavbarRouting from './components/common/navbarRouting';

import { Route, Switch } from 'react-router-dom';
import AppRouting from './components/admin/home/appRouting';
import AdminRouting from './components/admin/home/adminRouting';


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
          <Route exact path="/booking" component={Booking}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/ContactLogo" component={ContactLogo}></Route>
          <Route exact path="/userprofile" component={UserProfile}></Route>
          <Route exact path="/addadress" component={AddAddress}></Route>
          <Route exact path="/classes" component={Classes}></Route>
        </Switch>
      </Router>

      <Switch>
        <Route path="/admin" component={AdminRouting} /> 
        <Route path="/" component={AppRouting} />
      </Switch>

    </div>
  );
}

export default App;