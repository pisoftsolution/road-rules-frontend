import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import './admin.css';
import { addAbout, getAbout } from '../../../redux/actions/about';

function About() {
  const initialState = { text: '' };
  const [formData, setFormData] = useState(initialState);
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const abouts = useSelector((state) => state.aboutReducer?.aboutData?.b);
  useEffect(() => {
    dispatch(getAbout());
  }, [shouldCall]);
  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addAbout(formData, abouts)).then((res) => {
      console.log(res);
      setShouldCall(!shouldCall);
    });
  };
  return (
    <div className="container" id="aabu">
      <div className="card " id="abu">
        <label className="subheading mt-4">About</label>
        <form onSubmit={handleAddSubmit}>
          <div className="form-group mt-3" id="forma">
            <textarea
              name="text"
              placeholder="Enter Text Here"
              type="text"
              aria-label="Username"
              aria-describedby="basic-addon1"
              // value={formData.text}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
                });
              }}
              required
            />
          </div>
        </form>
        <Button type="submit" id="yo" className="mt-4">
          Save
        </Button>
      </div>
    </div>
  );
}

export default About;
