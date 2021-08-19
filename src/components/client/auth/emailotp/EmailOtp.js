import React from 'react';
import { useHistory } from 'react-router-dom';



function EmailOtp() {
    const history = useHistory();
    const handleRoute = () => {
        history.push(`/signin`);
    };
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
                                <h4 class="mb-4 mt-5" id="signin">Please enter the Email OTP</h4>
                                <div class="m">
                                    <label id="email">OTP</label>
                                    <div class="input-group ">
                                        <input type="text" class="form-control " aria-label="Username" aria-describedby="addon-wrapping" />
                                    </div>
                                    <button type="submit" class="btn"  onClick={handleRoute} >Submit</button>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmailOtp;