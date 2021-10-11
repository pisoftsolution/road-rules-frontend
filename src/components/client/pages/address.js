import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './slotdetails.css';
import { getAddressById } from '../../../redux/actions/addaddress';
import jwt from 'jwt-decode';

function Address() {
  const history = useHistory();
  const handleRoute = () => {
    history.push('/newaddress');
  };

  const handleClick = () => {
    history.push('/paymentmode');
  };

  const dispatch = useDispatch();
  const address = useSelector((state) => state.addressReducer?.addressData?.b);
  console.log(address);
  useEffect(() => {
    const token = localStorage.getItem('token');
    var decoded = jwt(token);
    dispatch(getAddressById(decoded.id));
  }, []);
  return (
    <>
      <div className="container" id="sec7">
        <div className="card" id="sec8">
          <h1 className="mainhead">Please select the pick up Address..</h1>
          {address && address.length > 0
            ? address.map((b) => {
                return (
                  <>
                  <input type="radio" id="rad" name="fav_language" value="HTML" />
                    <p className="sent">
                      {b.city},{b.province},{b.street},{b.postalCode} 
                    </p>
                  </>
                );
              })
            : ''}
          <Button onClick={handleClick} className="pickadd">Continue</Button>
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
