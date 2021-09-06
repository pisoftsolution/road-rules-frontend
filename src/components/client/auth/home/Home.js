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
              <h2 id="three">Booking in threee EasysSteps</h2>
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
          </div>

          <div className="container-fluid">
            <h2 className=" mb-5 text-center">Your Key to safe Driving</h2>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body keychoice">
                      <h4 className=" mt-5 text-center2">Choice</h4>

                      <p>
                        We are the best in terms of services that we offer you.
                        We ensure safety as our main priority therefore we are
                        well equipped with professional and well trained
                        instructors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body keychoice">
                      <h4 className=" mt-5 text-center2">95% PASS RATE</h4>

                      <p>Success rate of our students is very high.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body keychoice">
                      <h4 className=" mt-5 text-center2">Best Cars</h4>

                      <p>
                        Both the classroom driving classes as well as online
                        sessions are available with a wide range of cars.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-4">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body keychoice">
                      <h4 className=" mt-5 text-center2">Pickup</h4>

                      <p>
                        We provide door pickup for our students at no extra
                        cost!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body keychoice">
                      <h4 className=" mt-5 text-center2">We train all ages</h4>

                      <p>
                        We have driving instructors who are certified. Apart
                        from that, they are also fit both mentally as well as
                        physically who train classes 5 and 7.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body keychoice ">
                      <h4 className=" mt-5 text-center2">Road Rules</h4>

                      <p>
                        We will train you correctly with all road rules and
                        regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid" id="homesecondimg1">
            <div className="container">
              <h2 id="three">What our students have to say about us.</h2>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body" id="students">
                      <h4 className="  text-center2">Pickup</h4>

                      <p>
                        I am writing this review on behalf of my daughter, she
                        took lessons from this place and I only heard good
                        things about it. She had her class 7 road test coming up
                        and was worried she would fail, but the instructor made
                        it easy for her to understand and told her to stay
                        confident and you can do it. She ended up passing her
                        road test and want to give a huge thank you to Road
                        Rules Driving School, for teaching in a well-mannered
                        environment and staying professional.
                      </p>
                      <div>
                        <img
                          src="https://www.roadrules.info/images/testimonial-2.svg"
                          alt="about"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body keychoice">
                      <h4 className="  text-center2">We train all ages</h4>
                      <p className="mb-10">
                        I took the 10-lesson package with this driving school. I
                        had a pleasant experience all the way through and
                        instructor made everything really easy to do. Her
                        techniques and tips really helped me understand better,
                        and passed my Class 5 test on the first attempt.Thank
                        you to Road Rules Driving School, and I would 100%
                        recommend it.
                      </p>
                      <div className="bottom">
                        <img
                          src="https://www.roadrules.info/images/testimonial-2.svg"
                          alt="about"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body keychoice">
                      <h4 className="  text-center2">Road Rules</h4>
                      <p>
                        We will train you correctly with all road rules and
                        regulations.
                      </p>
                      <div className="bottom">
                        <img
                          src="https://www.roadrules.info/images/testimonial-2.svg"
                          alt="about"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
            <div className="text-primaryColor text-center font-demi font-15 ">
              <span>@ 2021 all rights reserved</span>
            </div>
          </footer>
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


// export default Home;
