import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import './All.css'
import { addAbout, getAbout } from '../../../redux/actions/about';

function About() {

  const initialState = { text: "" };
  const [formData, setFormData] = useState(initialState);
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const abouts = useSelector(state => state.aboutReducer?.aboutData?.b);
  useEffect(() => {
    dispatch(getAbout())
  }, [shouldCall])
  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addAbout(formData, abouts))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
      })
  }
  return (
    <div className="container" id="sec1">
      <div className="card" id="sec2">
        <form onSubmit={handleAddSubmit}>
          <div className="form-group" id="card-design">
            <label className="subheading">About</label>
              <textarea
                id="parra"
                name="text"
                placeholder="Enter Text Here"
                type="text"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={formData.text}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value
                  });
                }}
                required
              />
            <Button
              id="seeprofile"
              type="submit"
            >
              save
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default About;
