import React from 'react';
import './booking.css';

function Test1() {
  return (
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
  );
}
export default Test1;
