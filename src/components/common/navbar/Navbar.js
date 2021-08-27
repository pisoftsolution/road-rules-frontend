import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <div className="row bb">
          <div className="col-md-6 wid">
            <img
              src="https://www.roadrules.info/images/logo-roadrules.svg"
              className="pic"
              alt="LOGO"
            ></img>
          </div>

          <div className="col-md-6 nj">
            <ul className="mk">
              <li>Home</li>
              <li>Booking</li>
              <li>Contact Us</li>
              <img
                src="https://www.roadrules.info/images/profile_avatar.png"
                className="img-fluid"
                id="logo2"
                alt="LOGO"
              ></img>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
