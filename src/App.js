import React from 'react';
import './App.css';
import Signin from './components/client/auth/login/Signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './History';
import Signup from './components/client/auth/signup/Signup';
import PhoneOtp from './components/client/auth/phoneotp/PhoneOtp';
import EmailOtp from './components/client/auth/emailotp/EmailOtp';
import Home from './components/client/auth/home/Home';
import Success from './components/client/Payment/success/success';
import Cancel from './components/client/Payment/Cancel/cancel';
import Stripe from './components/client/Payment/payment/stripe';
import Payment from './components/client/Payment/payment/payment';
import Navbar from './components/common/navbar/Navbar';
import Sidebar from './components/admin/Sidebar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Signin}></Route>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/phoneotp" component={PhoneOtp}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/email-otp" component={EmailOtp}></Route>
          <Route exact path="/success" component={Success}></Route>
          <Route exact path="/cancel" component={Cancel}></Route>
          <Route exact path="/stripe" component={Stripe}></Route>
          <Route exact path="/payment" component={Payment}></Route>
          <Route exact path="/sidebar" component={Sidebar}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
