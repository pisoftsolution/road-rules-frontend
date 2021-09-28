import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import './home.css';
import { getTestimonial } from '../../../redux/actions/hometestimonial';
import { getAboutcards } from '../../../redux/actions/aboutcards';
import { getAbout } from '../../../redux/actions/about';
import { getChoose } from '../../../redux/actions/choose';

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 3000,
    autoplaySpeed: 800,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const dispatch = useDispatch();
  const testimonials = useSelector(
    (state) => state.hometestimonial?.testimonialData?.b
  );
  useEffect(() => {
    dispatch(getTestimonial());
  }, []);

  const aboutcard = useSelector((state) => state.aboutcards?.aboutcardsData?.b);
  useEffect(() => {
    dispatch(getAboutcards());
  }, []);

  const abouts = useSelector((state) => state.about?.aboutData?.b);
  useEffect(() => {
    dispatch(getAbout());
  }, []);

  const choice = useSelector((state) => state.choose?.chooseData?.b);
  useEffect(() => {
    dispatch(getChoose());
  }, []);

  return (
    <>
      <div className="homie">
        <div className="background">
          {abouts && abouts.length > 0 ? (
            // ? abouts.map((b) => {
            //     return (
            //       <>
            //         <div id="htext">
            //           <h1>Road Rules Driving School</h1>
            //           <p3 >{b.text}</p3>
            //         </div>
            //       </>
            // //     );
            //   })
            <div id="htext">
              <h1 id="ttext">Road Rules Driving School</h1>
              <p3 id="abt">{abouts[1].text}</p3>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="conatiner-fluid">
          <div className="row">
            <h2 className="left">Why Choose Us?</h2>

            <div className="chasi">
              <div className="cha" id="leftim">
                <img
                  src="https://www.roadrules.info/images/test.jpg"
                  id="leftim"
                />
              </div>
              <div className="ch1">
                {choice && choice.length > 0
                  ? choice.map((b) => {
                      return (
                        <>
                          <div className="chosse">
                            <p id="point1">{b.point}</p>
                            {/* <div className="col-md-2"></div> */}
                          </div>
                        </>
                      );
                    })
                  : ''}
              </div>
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
            <div className="container-fluid" id="homesecondimg">
              <h2 id="three">Booking in threee EasysSteps</h2>
              <div className="container">
                <div className="card mb-3" id="k">
                  <h4 id="step1"> Step 1</h4>
                  <h5 id="step2">Go to Login/Signup and create an account.</h5>
                </div>
              </div>

              <div className="container">
                <div className="card mb-3" id="k">
                  <h4 id="stepa"> Step 2</h4>
                  <h5 id="step2">
                    Go to the Bookings tab and select a suitable time slot.
                  </h5>
                </div>
              </div>

              <div className="container">
                <div className="card mb-3" id="k">
                  <h4 id="stepb"> Step 3</h4>
                  <h5 id="step2">Pay for the booked slots.</h5>
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
          <div className="safe mb-5">
            <h2>Your key to safe driving</h2>
          </div>
          {aboutcard && aboutcard.length > 0
            ? aboutcard.map((b) => {
                return (
                  <>
                    <div className="container-fluid">
                      {/* <h2 className=" mb-5 text-center">{b.subHeading}</h2> */}
                      <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                          <div className="col">
                            <div className="card h-100">
                              <div className="card-body keychoice">
                                <h4 className=" mt-5 text-center2">
                                  {b.subHeading}
                                </h4>

                                <p>{b.text}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card h-100">
                              <div className="card-body keychoice">
                                <h4 className=" mt-5 text-center2">
                                  {b.subHeading}
                                </h4>

                                <p>{b.text}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card h-100">
                              <div className="card-body keychoice">
                                <h4 className=" mt-5 text-center2">
                                  {b.subHeading}
                                </h4>

                                <p>{b.text}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            : ''}

          {aboutcard && aboutcard.length > 0
            ? aboutcard.map((b) => {
                return (
                  <>
                    <div className="container-fluid mt-4">
                      <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                          <div className="col">
                            <div className="card h-100">
                              <div className="card-body keychoice">
                                <h4 className=" mt-5 text-center2">
                                  {' '}
                                  {b.subHeading}
                                </h4>

                                <p>{b.text}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card h-100">
                              <div className="card-body keychoice">
                                <h4 className=" mt-5 text-center2">
                                  {' '}
                                  {b.subHeading}
                                </h4>

                                <p>{b.text}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card h-100">
                              <div className="card-body keychoice ">
                                <h4 className=" mt-5 text-center2">
                                  {' '}
                                  {b.subHeading}
                                </h4>

                                <p>{b.text}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            : ''}
        </div>

        <div className="conatiner" id="homesecondimg2">
          <div>
            <h3 className="cstd">What our students have to say about us.</h3>
          </div>
          {testimonials && testimonials.length > 0
            ? testimonials.map((b) => {
                return (
                  <>
                    <Slider {...settings}>
                      <div className="col">
                        <div className="card vg" id="c1">
                          <div className="card-body  ">
                            <h4 className="  text-center2">{b.name}</h4>
                            <p className="p1">
                              {/* I am writing this review on behalf of my daughter, she took
                    lessons from this place and I only heard good things about
                    it. She had her class 7 road test coming up and was worried
                    she would fail, but the instructor made it easy for her to
                    understand and told her to stay confident and you can do it.
                    She ended up passing her road test and want to give a huge
                    thank you to Road Rules Driving School, for teaching in a
                    well-mannered environment and staying professional. */}
                              {b.comment}
                            </p>
                            <div className="gt">
                              <img
                                src="https://www.roadrules.info/images/testimonial-2.svg"
                                alt="about"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col ">
                        <div className="card vg" id="c2">
                          <div className="card-body  ">
                            <h4 className="  text-center2">{b.name}</h4>
                            <p className="p1">
                              {/* I am writing this review on behalf of my daughter, she took
                    lessons from this place and I only heard good things about
                    it. She had her class 7 road test coming up and was worried
                    she would fail, but the instructor made it easy for her to
                    understand and told her to stay confident and you can do it.
                    She ended up passing her road test and want to give a huge
                    thank you to Road Rules Driving School, for teaching in a
                    well-mannered environment and staying professional. */}
                              {b.comment}
                            </p>
                            <div className="gt">
                              <img
                                src="https://www.roadrules.info/images/testimonial-2.svg"
                                alt="about"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col ">
                        <div className="card vg" id="c3">
                          <div className="card-body  ">
                            <h4 className="  text-center2">{b.name}</h4>
                            <p className="p1">
                              {/* I am writing this review on behalf of my daughter, she took
                    lessons from this place and I only heard good things about
                    it. She had her class 7 road test coming up and was worried
                    she would fail, but the instructor made it easy for her to
                    understand and told her to stay confident and you can do it.
                    She ended up passing her road test and want to give a huge
                    thank you to Road Rules Driving School, for teaching in a
                    well-mannered environment and staying professional. */}
                              {b.comment}
                            </p>
                            <div className="gt">
                              <img
                                src="https://www.roadrules.info/images/testimonial-2.svg"
                                alt="about"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col ">
                        <div className="card vg" id="c4">
                          <div className="card-body ">
                            <h4 className="  text-center2">{b.name}</h4>
                            <p className="p1">
                              {/* I am writing this review on behalf of my daughter, she took
                    lessons from this place and I only heard good things about
                    it. She had her class 7 road test coming up and was worried
                    she would fail, but the instructor made it easy for her to
                    understand and told her to stay confident and you can do it. */}
                              {b.comment}
                            </p>
                            <div className="gt">
                              <img
                                src="https://www.roadrules.info/images/testimonial-2.svg"
                                alt="about"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </>
                );
              })
            : ''}
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

export default Home;
