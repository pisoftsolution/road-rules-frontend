import React from 'react';
import './contactus.css';
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container mt-5 p" id="contactus">
          <div className="row d-flex col-sm-8 col-12">
            <div className="card" id="concard">
              <h1 id="conus">Contact US</h1>
              <div className="text-muted font-medium font-16 text mt-4">
                How can we help you out? If you fill out the form below, we will
                try to get back to you ASAP!
                <p className="text-muted" id="tem">
                  Fields marked with an asterisk (*) are required.
                </p>
              </div>

              <div className="fomie mt-3 d-flex">
                <div className="input-group mr-2">
                  <input
                    id="fmc"
                    type="text"
                    className="form-control"
                    name="name"
                    value=""
                    required=""
                    placeholder="Name (*)"
                  />
                </div>
                <div className="input-group mr-2">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value=""
                    placeholder="Email (*)"
                  />
                </div>
              </div>
            </div>
            <div className="input-group mt-4">
              <textarea
                type="text"
                className="form-control"
                name="message"
                placeholder="Message (*)"
                rows="8"
              ></textarea>
            </div>
            <div className="conbut">
              <button type="button" className="btn btn-primary mt-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="footer">
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
          <div className="text-primaryColor text-center font-demi font-15 mt-5 ">
            <span>@ 2021 all rights reserved</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contact;
