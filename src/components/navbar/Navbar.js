import React from 'react'

function Navbar(){
    
    return(
        <nav class="navbar navbar-light">
                <div class="container-fluid">
                    <div class="col-md-4">
                        <img src="https://www.roadrules.info/images/logo-roadrules.svg" 
                         class="img-fluid" 
                         id="logo" 
                         alt="LOGO"
                        >
                        </img>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-md-4">
                        <ul class="u">
                        <li>Home</li>
                        <li>Booking</li>
                        <li>Contact Us</li> 
                        <img src="https://www.roadrules.info/images/profile_avatar.png" 
                         class="img-fluid" 
                         id="logo2" 
                         alt="LOGO"
                        >
                        </img>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;