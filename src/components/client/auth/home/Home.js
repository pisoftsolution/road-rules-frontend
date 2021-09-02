import React from 'react';
import './home.css';

function Home() {
  return (
    <>
      <div className="homie">
        <div className="background">
          <h1>Road Rules Driving School</h1>
          <p3>
            We offer a selection of ICBC driving test lessons in Surrey and
            neighboring cities. Each of our driving lessons is conducted with an
            experienced, friendly and supportive driving instructor who is ICBC
            accredited.
          </p3>
        </div>
        <div className="conatiner-fluid">
          <div className="row">
            <h2 className="left">Why Choose Us?</h2>
            <div className="col-md-4">
              <img
                src="https://www.roadrules.info/images/test.jpg"
                id="leftim"
              />
            </div>
            <div className="col-md-7">
              <p>
                Road Rules Driving School offers a variety of services that will
                be beneficial to our students, which will develop good driving
                skills, and habits while being trained by our well educated and
                experienced instructor.
              </p>
              <p>
                Besides basic driving skills, Road Rules Driving School can also
                assist you in overcoming your driving weaknesses. In fact we
                pride ourselves in helping you convert your driving problems
                into strengths.
              </p>
              <p>
                We offer winter driving, parallel parking and customized courses
                which fit your needs so that you can hone up those skills that
                worry you most. No matter what your driving difficulty, for
                example, reversing, snow driving, hill starts and parking or
                anything else, our instructors will fully focus on teaching you
                until you are confident and at ease.
              </p>
              <div className="col-md-2"></div>
            </div>
            <div className="container-fluid" id="homesecondimg">
              <h2 className=" mb-5 text-center">Current Offers</h2>
              <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className=" mb-5 text-center2">
                          1-Hour Auto Package
                        </h4>
                        <div className="font-demi text-muted text-center mb-3">
                          1 hour of automatic one on one driving lesson. (select
                          the date)
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
                        <h4 className=" mb-5 text-center2">
                          6-Hour Auto Package
                        </h4>
                        <div className="font-demi text-muted text-center mb-3">
                          6 hour of automatic one on one driving lesson. (select
                          the date)
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
                        <h4 className=" mb-5 text-center2">
                          10-Hour Auto Package
                        </h4>
                        <div className="font-demi text-muted text-center mb-3">
                          10 hour of automatic one on one driving lesson.
                          (select the date)
                        </div>
                        <p id="mny">400$</p>
                        <div>
                          <button type="button" className="btn">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btncheckprices">
                    <button type="button" className="btn btn-lg ">
                      Check 1All Prices
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid" id="homesecondimg1">
              <h2 id="three">Booking In Three Easy Steps</h2>
              <div className="container">
                <div className="card mb-2" id="k">
                  <h4 id="step1"> Step 1</h4>
                  <h5 id="step2">Go to Login/Signup and create an account.</h5>
                </div>
              </div>

              <div className="container">
                <div className="card mb-2" id="k">
                  <h4 id="stepa"> Step 2</h4>
                  <h5 id="step2">
                    Go to the Bookings tab and select a suitable time slot.
                  </h5>
                </div>
              </div>

              <div className="container">
                <div className="card mb-2" id="k">
                  <h4 id="stepb"> Step 3</h4>
                  <h5 id="step2">Go to Login/Signup and create an account.</h5>
                </div>
              </div>
            </div>
            <div className="container" id="gif">
              <img
                className="img-fluid"
                src="https://www.roadrules.info/images/about.gif"
              />
            </div>
            <div className="container">
              <h2 className="mb-5">Your Key To Safe Driving</h2>
              <div className="row" id="key">
                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body"></div>
                  </div>
                  {/* <svg
                    className="MuiSvgIcon-root text-primaryColor mb-2 MuiSvgIcon-fontSizeSmall"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path>
                  </svg> */}
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// import React from 'react';
// import { useHistory } from 'react-router-dom';

// function Home() {
//   const history = useHistory();
//   const token = localStorage.getItem('token');
//   return (
//     <>
//       <div className="card d-flex flex-row justify-content-between">
//         {token ? (
//           <button
//             type="button"
//             className="btn btn-secondary col-5"
//             onClick={() => {
//               history.push('/phoneotp');
//             }}
//           >
//             Signup
//           </button>
//         ) : (
//           <button
//             type="button"
//             className="btn btn-secondary col-5"
//             onClick={() => {
//               history.push('/email-otp');
//             }}
//           >
//             Submit
//           </button>
//         )}
//         {token ? (
//           <button
//             type="button"
//             className="btn btn-secondary col-5"
//             onClick={() => {
//               history.push('/login');
//             }}
//           >
//             Submit
//           </button>
//         ) : (
//           <button
//             type="button"
//             className="btn btn-secondary col-5"
//             onClick={() => {
//               history.push('/login');
//             }}
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </>
//   );
// }


export default Home;
