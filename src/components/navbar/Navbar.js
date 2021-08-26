import React from 'react'

function Navbar(){
    
    return(
        <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <div className="col-md-4">
                        <img src="https://www.roadrules.info/images/logo-roadrules.svg" 
                         className="img-fluid" 
                         id="logo" 
                         alt="LOGO"
                        >
                        </img>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-4">
                        <ul className="u">
                        <li>Home</li>
                        <li>Booking</li>
                        <li>Contact Us</li> 
                        <img src="https://www.roadrules.info/images/profile_avatar.png" 
                         className="img-fluid" 
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