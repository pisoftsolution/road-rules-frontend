import React from 'react';
import './userprofile.css';

function UserProfile() {
  return (
    <div>
      <div className="container-fuid mt-5">
        <div className="naaav">
          <div className="mn">
            <ul className="iu ">
              <span>
                <i className="fas fa-cog"></i> Settings
                <hr></hr>
              </span>
              <li className="il">
                <a
                  className="nav-link pro"
                  aria-current="page"
                  href="/UserProfile"
                >
                  <i className="fas fa-portrait"> </i> User Profile
                </a>
              </li>
              <li className="il">
                <a className="nav-link pro" href="/addadress">
                  <i className="fas fa-home"></i> Address
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="card con mt-5">
          <div className="tt">
            <div className="input-group up">
              <input
                type="text"
                className="form-control up "
                placeholder="Full Name"
              />
            </div>
            <div className="input-group up1 mt-4">
              <input
                type="text"
                className="form-control upa"
                placeholder="E-mail"
              />
              <input
                type="text"
                className="form-control upb"
                placeholder="Phone Number"
              />
            </div>
            {/* <div className="1input">
          <input type="text"></input>
        </div>
        <div className="2input mt-5 ">
          <input type="text"></input>
          <input type="text"></input>
        </div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5" id="footer">
        <footer className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
              <div className=" footer-card px-3">
                <h3 className="text-primaryColor font-bold mb-4">Company</h3>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  Work with us
                </div>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  Privacy Notice
                </div>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  Term of Service
                </div>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  {' '}
                  +1&nbsp;(778)&nbsp;889-7804
                </div>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  roadrulescanada@gmail.com
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
              <div className=" footer-card px-3">
                <h3 className="text-primaryColor font-bold mb-4">Support</h3>
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2 hoverable">
                  Help Center
                </div>
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2 hoverable">
                  Contact Us
                </div>
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2 hoverable">
                  Request a New Feature
                </div>
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2 hoverable">
                  Report an Outage
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-4">
              <div className=" footer-card px-3"></div>
              <div>
                <img
                  src="https://www.roadrules.info/images/logo-roadrules.svg"
                  className="pic"
                ></img>
              </div>
            </div>
          </div>
          <div className="text-primaryColor text-center font-demi font-15 ">
            <span>@ 2021 all rights reserved</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default UserProfile;
