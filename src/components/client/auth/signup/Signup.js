import React from 'react';
import './signup.css';
import { useHistory } from 'react-router-dom';

function Signup() {
    const history = useHistory();
  const handleRoute = () => {
    history.push(`/phoneotp`);
  };
  return (
        <div class="container-fluid p-0 mt-5.5rem" id="body2">
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
                    <div class="card box-shadow-lg bg-white" id="card2" >
                        <div>
                            <h4 class="mb-4 mt-5" id="signin2">Welcome to Road-Rules, Signup here...</h4>
                            <div class="m">
                                <label id="email">Full Name</label>
                                <div class="input-group ">
                                <input type="text" class="form-control " aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div class="row">
                                <div class="col-md-4">
                                <label id="email" class="mt-4">Email</label>
                                </div>
                                <div class="col-md-4"></div>
                               </div>
                                <div class="input-group ">
                                <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <label id="email" class="mt-4">Phone Number</label>
                                <div class="input-group ">
                                <input type="text" class="form-control" aria-label="Phone Number" aria-describedby="addon-wrapping" />
                                </div>
                                <label id="password" class="mt-4">Password</label>
                                <div class="input-group ">
                                <input type="Password" class="form-control" aria-label="Password" aria-describedby="addon-wrapping" />
                                </div>                               
                                <button type="button" class="btn"  onClick={handleRoute}>Signup</button>
                            </div>
                            
                            {/* <button onClick={handleRoute} type="button" class="btn signup" id="signup">Become a member <a id="signUp" href="" >Signup</a></button> */}
                        </div>
                    </div>
                <div>
                <button id="signUp" class="btn signup" id="signup" type="submit" >Already a member <a id="signUp">Signin</a></button>
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



