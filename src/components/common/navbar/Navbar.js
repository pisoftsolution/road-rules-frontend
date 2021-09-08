import React from 'react';
import './nav.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.roadrules.info/images/logo-roadrules.svg"
            className="pic"
            alt="LOGO"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Booking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>

            <img
              src="https://www.roadrules.info/images/profile_avatar.png"
              className="img-fluid"
              id="logo2"
              alt="LOGO"
            ></img>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-light">
    //   <div className="container-fluid">
    //     <div className="row bb">
    //       <div className="col-md-6 wid">
    //         <img
    //           src="https://www.roadrules.info/images/logo-roadrules.svg"
    //           className="pic"
    //           alt="LOGO"
    //         ></img>
    //       </div>

    //       <div className="col-md-6 nj">
    //         <ul className="mk">
    //           <li>Home</li>
    //           <li>Booking</li>
    //           <li>Contact Us</li>
    //           <img
    //             src="https://www.roadrules.info/images/profile_avatar.png"
    //             className="img-fluid"
    //             id="logo2"
    //             alt="LOGO"
    //           ></img>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="burger">
    //     <div className="line"></div>
    //     <div className="line"></div>
    //     <div className="line"></div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
