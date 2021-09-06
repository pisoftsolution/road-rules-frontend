import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './signup.css';
import { useHistory } from 'react-router-dom';
import { signup } from '../../../../redux/actions/auth';
import { emailOtp } from '../../../../redux/actions/verify';

function Signup() {
  const initialState = { email: '', password: '', phone: '', fullName: '' };
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, history))
    .then((res) => {
      console.log(res);
      localStorage.setItem('email', formData.email);
      localStorage.setItem('phone', formData.phone);
      dispatch(emailOtp());
    });
  };
  const history = useHistory();
  // const handleRoute = () => {
  //   history.push(`/phoneotp`);
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
                  Welcome to Road-Rules, Signup here...
                </h4>
                <div className="m">
                  <form onSubmit={handleSubmit}>
                    <label id="email">Full Name</label>
                    <div className="input-group ">
                      <input
                        name="fullName"
                        type="text"
                        placeholder="Enter your fullName"
                        className="form-control "
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                          });
                        }}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <label id="email" className="mt-4">
                          Email
                        </label>
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                    <div className="input-group ">
                      <input
                        name="email"
                        type="text"
                        placeholder="Enter your e-mail"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                          });
                        }}
                      />
                    </div>
                    <label id="email" className="mt-4">
                      Phone Number
                    </label>
                    <div className="input-group ">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Enter your Phone Number (with country code)"
                        className="form-control"
                        aria-label="Phone Number"
                        aria-describedby="addon-wrapping"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                          });
                        }}
                      />
                    </div>
                    <label id="password" className="mt-4">
                      Password
                    </label>
                    <div className="input-group ">
                      <input
                        name="password"
                        type="Password"
                        placeholder="Enter your password"
                        className="form-control"
                        aria-label="Password"
                        aria-describedby="addon-wrapping"
                        value={formData.password}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                          });
                        }}
                      />
                    </div>
                    <button
                      // onClick={handleRoute}
                      type="submit"
                      className="btn2"
                    >
                      Signup
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <button className="btn signup">
                Already a member
                <a id="signUp">Signin</a>
              </button>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
