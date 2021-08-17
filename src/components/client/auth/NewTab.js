import React from 'react';
import  { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Signup from './Signup';
import history from '../../../History'; 

function NewTab(){
    return(
        <Router history={history}>
        {/* <div className="App"> */}
        {/* <Link exact to = "/Signup"></Link> */}
        <Switch>
        <Route exact path="/signup" component={Signup} ></Route>
        </Switch>
        {/* </div> */}
      </Router>
    )
}
export default NewTab;