import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../../redux/actions/auth';
import './signin.css';

function Signin() {
  const initialState = { email: '', password: '' };
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(login(formData, history));
  };
  const history = useHistory();
  const handleRoute = () => {
    history.push(`/signup`);
  };
  return (
    <div className="container-fluid p-0 mt-5.5rem" id="body">
      <div className="container mm">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <div className="card box-shadow-lg bg-white" id="card">
              <div>
                <h4 className="mb-4 mt-5" id="signin">
                  Sign in to your account
                </h4>
                <div className="m">
                  <form onSubmit={handleSubmit}>
                    <label id="email">Email</label>
                    <div className="input-group ">
                      <input
                        name="email"
                        type="text"
                        placeholder="Enter your e-mail"
                        className="form-control "
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
                    <div className="row">
                      <div className="col-md-4">
                        <label id="password" className="mt-4">
                          Password
                        </label>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4">
                        <label id="password" className="mt-4">
                          <a href="">Forgot Password?</a>
                        </label>
                      </div>
                    </div>
                    <div className="input-group ">
                      <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="form-control"
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
                    <button type="submit" className="btn2">
                      Signin
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <button id="signUp1" className="btn1 signup" type="submit">
                Become a member
                <a id="signUp" onClick={handleRoute}>
                  Signup
                </a>
              </button>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
