import React from 'react';
import './newaddress.css';

function NewAddress() {
  return (
    <div className="container-fluid p-0 mt-5.5rem" id="body2">
      <div className="container mm">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <div className="card box-shadow-lg bg-white" id="card2">
              <div>
                <h4 className="mb-4 mt-5" id="signin2">
                  Add Pickup Address
                </h4>
                <div className="m">
                  <form>
                    <label id="email">City</label>
                    <div className="input-group ">
                      <input
                        type="text"
                        placeholder="Torronto"
                        className="form-control "
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <label id="email" className="mt-4">
                          Province
                        </label>
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                    <label id="email" className="mt-4">
                      Street Address
                    </label>
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Phone Number"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                    <label id="password" className="mt-4">
                      Postal Code
                    </label>
                    <div className="input-group ">
                      <input
                        type="number"
                        className="form-control"
                        aria-label="Password"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                    <button type="submit" className="adddetails">
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div></div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAddress;
