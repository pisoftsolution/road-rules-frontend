import React from 'react';
import './App.css';
import Signin from './components/client/auth/login/Signin';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/client/auth/signup/Signup';
import PhoneOtp from './components/client/auth/phoneotp/PhoneOtp';
import EmailOtp from './components/client/auth/emailotp/EmailOtp';
// import Home from './components/client/auth/home/Home';
import Home from './components/home/Home'
import Success from './components/client/Payment/success/success';
import Cancel from './components/client/Payment/Cancel/cancel';
import Stripe from './components/client/Payment/payment/stripe';
import Payment from './components/client/Payment/payment/payment';
// import Navbar from './components/common/navbar/Navbar';
import Sidebar from './components/admin/Sidebar';
import About from './components/admin/home/About';
import AboutCards from './components/admin/home/AboutCards';
import Choice from './components/admin/home/Choice';
import Testimonials from './components/admin/home/Testimonials';
import User from './components/admin/home/User';
import { makeStyles } from "@material-ui/core/styles";
import Instructor from './components/admin/home/Instructor';
import Slots from './components/admin/home/Slots';
import AllRides from './components/admin/home/AllRides';
import Logout from './components/admin/home/Logout';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
      <Router history={history}>
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
        </Switch>
      </Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Signin}></Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/email-otp" component={EmailOtp}></Route>
        <Route exact path="/phoneotp" component={PhoneOtp}></Route>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/success" component={Success}></Route>
        <Route exact path="/cancel" component={Cancel}></Route>
        <Route exact path="/stripe" component={Stripe}></Route>
        <Route exact path="/payment" component={Payment}></Route>
        {/* <Route exact path="/admin" component={Sidebar}></Route> */}
        <div className={classes.container}>
          <Sidebar />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route exact path="/aboutcards" render={props => <AboutCards {...props} />} />
          <Route exact path="/testimonial" render={props => <Testimonials {...props} />} />
          <Route exact path="/choice" render={props => <Choice {...props} />} />
          <Route exact path="/user" render={props => <User {...props} />} />
          <Route exact path="/instructor" render={props => <Instructor {...props} />} />
          <Route exact path="/slots" render={props => <Slots {...props} />} />
          <Route exact path="/allrides" render={props => <AllRides {...props} />} />
          <Route exact path="/logout" render={props => <Logout {...props} />} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
