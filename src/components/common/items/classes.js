import React from 'react';
import './userprofile.css';

function Classes() {
  return (
    <div>
      <div className="container cls">
        <h1 className="cla"> My Classes</h1>
      </div>

      <div className="container-fluid mt-5" id="footer2">
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

export default Classes;
