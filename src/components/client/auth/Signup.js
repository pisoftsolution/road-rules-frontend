import React from 'react';
import './signup.css';

function Signup() {
    return (
        <div class="container-fluid p-0 mt-5.5rem" id="body">
      <nav class="navbar navbar-light">
        <div class="container-fluid">
          <div class="col-md-4">
          <img src="https://www.roadrules.info/images/logo-roadrules.svg" class="img-fluid" id="logo" alt="LOGO"></img>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-4">
            <ul class="u">
              <li>Home</li>
              <li>Booking</li>
              <li>Contact Us</li>
              <img src="https://www.roadrules.info/images/profile_avatar.png" class="img-fluid" id="logo2" alt="LOGO"></img>
            </ul>
         </div>
        </div>
        </nav>
        <div class="container mm">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 ">
          <div class="card box-shadow-lg bg-white" id="card" >
            <div>
            <h4 class="mb-4 mt-5" id="signin">Welcome to Road-Rules, Signup here...</h4>
            <div class="m">           
            <label id="email">Email</label>
            <div class="input-group ">
              <input type="text" class="form-control " aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
                                  <div class="row">
                                    <div class="col-md-4">
                                      <label id="password" class="mt-4">Password</label>
                                    </div>
                                    <div class="col-md-4"></div>
                                    <div class="col-md-4">
                                      <label id="password" class="mt-4"><a href="">Forgot Password?</a> </label>
                                    </div>
                                  </div>
            <div class="input-group ">
              <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <button type="button" class="btn">Signin</button>
            </div>
            {/* <button onClick={handleRoute} type="button" class="btn signup" id="signup">Become a member <a id="signUp" href="" >Signup</a></button> */}
            </div>
            
         </div>
         <div>
            <button id="signUp" class="btn signup" id="signup" type="submit" >Become a member <a id="signUp">Signup</a></button>
            </div>
        <div class="col-md-2">
        </div>
      </div>
      </div>
    </div>
    </div>
      )
}
export default Signup;



