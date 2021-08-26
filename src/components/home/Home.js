import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const token = localStorage.getItem('token');
  return (
    <>
      <div className="card d-flex flex-row justify-content-between">
        {token ? (
          <button
            type="button"
            className="btn btn-secondary col-5"
            onClick={() => {
              history.push('/phoneotp');
            }}
          >
            Signup
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary col-5"
            onClick={() => {
              history.push('/email-otp');
            }}
          >
            Submit
          </button>
        )}
        {token ? (
          <button
            type="button"
            className="btn btn-secondary col-5"
            onClick={() => {
              history.push('/login');
            }}
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary col-5"
            onClick={() => {
              history.push('/login');
            }}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
}

export default Home;
