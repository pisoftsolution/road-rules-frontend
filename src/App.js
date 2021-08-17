import React from 'react';
import './App.css';
import Signin from './components/client/auth/Signin';
import  { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import history from './History';
import Signup from './components/client/auth/Signup';



function App() {
  return (
    <div className="App">
   {/* <h1><Signin/> </h1>  */}
   
   <Router history={history}>
        {/* <div className="App"> */}
        {/* <Link exact to = "/Signup"></Link> */}
        <Switch>
          <Route exact path="/" component={Signin}></Route>
        <Route exact path="/signup" component={Signup} ></Route>
        </Switch>
        {/* </div> */}
      </Router> 
    </div>
  );
}

export default App;