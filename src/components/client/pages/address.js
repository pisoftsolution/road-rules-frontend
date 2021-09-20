import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './slotdetails.css';

function Address() {
  const history = useHistory();
  const handleRoute = () => {
    history.push('/newaddress');
  };

  return (
    <>
      <div className="container" id="sec7">
        <div className="card" id="sec8">
          <h1 className="mainhead">Please select the pick up address..</h1>
          <input id="rad" type="radio" />
          <p className="sent">Awas Vikas Colony,Uttar Pradesh,Torronoto</p>
          <Button className="pickadd">Continue</Button>
        </div>
      </div>
      <p className="newp">Not in the list?</p>
      <a className="newroute" onClick={handleRoute}>
        Add New
      </a>
    </>
  );
}

export default Address;
