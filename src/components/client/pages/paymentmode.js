import React from 'react';
import { Button } from 'react-bootstrap';
import './payment.css';

function PaymentMode() {
  return (
    <>
      <div className="container" id="sec7">
        <div className="card" id="sec8">
          <h1 className="mainhead">Please select the payment Mode..</h1>
          <input type="radio" id="rads" name="fav_language" value="HTML" />
          <p className="send">Catch</p>
          <input type="radio" id="rads" name="fav_language" value="HTML" />
          <p className="send">Payment Mode</p>
          <Button className="pickadd">Continue</Button>
        </div>
      </div>
    </>
  );
}

export default PaymentMode;
