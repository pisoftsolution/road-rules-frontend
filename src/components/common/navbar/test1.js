import React from 'react';
import './booking.css';

function Test1() {
  return (
    <>
      <div className="with" id="bookie">
        <h3 className="offer">Current Offers</h3>
        <div className="mtt">
          Call us at +1&nbsp;(778)&nbsp;889-7804 for special offers.
        </div>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className=" mb-5 text-center2">1-Hour Auto Package</h4>
                  <div className="font-demi text-muted text-center mb-3">
                    1 hour of automatic one on one driving lesson. (select the
                    date)
                  </div>
                  <p id="mny">45$</p>
                  <div>
                    <button type="button" className="btn btn-primary">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className=" mb-5 text-center2">6-Hour Auto Package</h4>
                  <div className="font-demi text-muted text-center mb-3">
                    6 hour of automatic one on one driving lesson. (select the
                    date)
                  </div>
                  <p id="mny">240$</p>
                  <div>
                    <button type="button" className="btn btn-primary">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className=" mb-5 text-center2">10-Hour Auto Package</h4>
                  <div className="font-demi text-muted text-center mb-3">
                    10 hour of automatic one on one driving lesson. (select the
                    date)
                  </div>
                  <p id="mny">400$</p>
                  <div>
                    <button type="button" className="btn btn-primary">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="rentt mt-4"> */}
        <div className="row row-cols-1 mt-3" id="rentt">
          <div className="col-3" id="coli">
            <div className="card h-100">
              <div className="card-body">
                <h4 className=" mb-5 text-center2">Rent School Vehicle</h4>
                <div className="font-demi text-muted text-center mb-3">
                  Rent School Vehicle for Road Test.
                </div>
                <p id="mny">120$</p>
                <div>
                  <button type="button" className="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
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
          <div className="text-primaryColor text-center font-demi font-15 ">
            <span>@ 2021 all rights reserved</span>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Test1;
