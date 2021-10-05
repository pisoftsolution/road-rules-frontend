import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import jwt from 'jwt-decode';
// import jwt_decode from "jwt-decode";
import './newaddress.css';
import { addAddress } from '../../../redux/actions/addaddress';

function NewAddress() {
  const initialState = { city: '', province: '', street:'', postalCode:'' };
  const [formData, setFormData] = useState(initialState);
  const [shouldCall, setShouldCall] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addressReducer?.addressData?.b);
  console.log(addresses);
// get the token from localstorage 
// decode token using jwt library
// 
  // const handleRoute = () => {
  //   history.push('/pickupaddress');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    console.log(token);
    dispatch(addAddress(formData, addresses));
    setShouldCall(!shouldCall);
    history.push('/pickupaddress');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   var token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTQ3YzQ5ZjBmNThmNDdhODQ5ODBmMiIsImVtYWlsIjoianVuYWlkYWxpMTUwLjdAZ21haWwuY29tIiwiaWF0IjoxNjMyOTI2ODY5LCJleHAiOjE2MzM5NjM2Njl9.H11l4nYOGqXEQHO5WqQM3m5r_ZGeitFuc6B1hfE0ENs";
  //   var decoded = jwt.decode(token1);
  //   console.log(decoded);
  //   const token = localStorage.getItem('token',token)
  //   console.log(token);
  //   dispatch(addAddress(formData, addresses));
  //   setShouldCall(!shouldCall);
  //   history.push('/pickupaddress');
  // };

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
                        name="city"
                        type="text"
                        className="form-control "
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                          });
                        }}
                        required
                      />
                    </div>
                    <label id="email" className="mt-4">
                      Province
                    </label>
                    <div className="input-group ">
                      <input
                        name="province"
                        type="text"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                          });
                        }}
                        required
                      />
                    </div>
                    <label id="email" className="mt-4">
                      Street Address
                    </label>
                    <div className="input-group ">
                      <input
                        name="street"
                        type="text"
                        className="form-control"
                        aria-label="Phone Number"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                          });
                        }}
                        required
                      />
                    </div>
                    <label id="password" className="mt-4">
                      Postal Code
                    </label>
                    <div className="input-group ">
                      <input
                        name="postalCode"
                        type="number"
                        className="form-control"
                        aria-label="Password"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                          });
                        }}
                        required
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="adddetails"
                    >
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
