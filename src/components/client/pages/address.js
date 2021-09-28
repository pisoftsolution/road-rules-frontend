import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './slotdetails.css';
import { getRide } from '../../../redux/actions/rides';

function Address() {
  const history = useHistory();
  const handleRoute = () => {
    history.push('/newaddress');
  };

  const dispatch = useDispatch();
  const rideup = useSelector((state) => state.rides?.rideData?.b);
  useEffect(() => {
    dispatch(getRide());
  }, []);
  return (
    <>
      <div className="container" id="sec7">
        {rideup && rideup.length > 0 ? (
          <div className="card" id="sec8">
            <h1 className="mainhead">Please select the pick up address..</h1>
            <input type="radio" id="rad" />
            <p className="sent">{rideup[1].address}</p>
            <Button className="pickadd">Continue</Button>
          </div>
        ) : (
          ''
        )}
      </div>
      <p className="newp">Not in the list?</p>
      <a className="newroute" onClick={handleRoute}>
        Add New
      </a>
    </>
  );
}

export default Address;
