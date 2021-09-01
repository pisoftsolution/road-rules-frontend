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
                        <h4 className=" mb-5 text-center">
                          1-Hour Auto Package
                        </h4>
                        <div className="font-demi text-muted text-center mb-3">
                          1 hour of automatic one on one driving lesson. (select
                          the date)
                        </div>
                        <p id="mny">45$</p>
                        <div>
                          <button className="text-white bg-primary submit-button">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className=" mb-5 text-center">
                          6-Hour Auto Package
                        </h4>
                        <div className="font-demi text-muted text-center mb-3">
                          6 hour of automatic one on one driving lesson. (select
                          the date)
                        </div>
                        <p id="mny">240$</p>
                        <div>
                          <button className="text-white bg-primary submit-button">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className=" mb-5 text-center">
                          10-Hour Auto Package
                        </h4>
                        <div className="font-demi text-muted text-center mb-3">
                          10 hour of automatic one on one driving lesson.
                          (select the date)
                        </div>
                        <p id="mny">400$</p>
                        <div>
                          <button className="text-white bg-primary submit-button">
                            Book Now
                          </button>
                        </div>
                      </div>
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

export default Home;
