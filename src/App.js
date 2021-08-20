import React from 'react';
import './App.css';
import Signin from './components/client/auth/login/Signin';
import  { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import history from './History';
import Signup from './components/client/auth/signup/Signup';
import PhoneOtp from './components/client/auth/phoneotp/PhoneOtp';
import EmailOtp from './components/client/auth/emailotp/EmailOtp'; 
import Home from './components/home/Home';
import Success from './stripeComponent/Success';
import Cancel from './stripeComponent/Cancel';
import Stripe from './stripeComponent/Stripe';


function App() { 
  return (
    <div className="App"> 
   <Router history={history}>
        <Switch>
        <Route exact path="/" component={Signin}></Route>
        <Route exact path='/' component={Home} />
        <Route exact path="/signup" component={Signup} ></Route>
        <Route exact path="/phoneotp" component={PhoneOtp} ></Route>
        <Route exact path="/signin" component={Signin} ></Route>
        <Route exact path="/email-otp" component={EmailOtp} ></Route> 
        <Route exact path="/success" component={Success} ></Route> 
        <Route exact path="/cancel" component={Cancel} ></Route> 
        <Route exact path="/stripe" component={Stripe} ></Route> 
        </Switch>
      </Router> 
    </div>
  );
}

export default App;