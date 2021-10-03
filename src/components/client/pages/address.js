import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './slotdetails.css';
import { addAddress } from '../../../redux/actions/addaddress';
// import { getClient } from '../../../redux/actions/addaddress';
// import { getAddress } from '../../../redux/actions/addaddress';

function Address() {

  const history = useHistory();
  const handleRoute = () => {
    history.push('/newaddress');
  };

  const dispatch = useDispatch();
  // const addresses = useSelector((state) => state.addressReducer?.addressData?.b);
  // console.log(addresses);
  // useEffect(() => {
  //   dispatch(getAddress());
  // }, []);

  // const addresses = useSelector((state) => state.addressReducer?.addressData?.b);
  // console.log(addresses);
  // useEffect(() => {
  //   dispatch(getClient());
  // }, []);

  const addresses = useSelector((state) => state.addressReducer?.addressData?.b);
  console.log(addresses);
  useEffect(() => {
    dispatch(addAddress());
  }, []);

  
  return (
    <>
      <div className="container" id="sec7">
      {addresses && addresses.length > 0
          ? addresses.map((b) => {
              return (
                <>
          <div className="card" id="sec8">
            <h1 className="mainhead">Please select the pick up address..</h1>
            <input type="radio" id="rad" />
            <p className="sent">{b.address}</p>
            <Button className="pickadd">Continue</Button>
          </div>
          </>
              );
            })
          : ''}
      </div>
      <p className="newp">Not in the list?</p>
      <a className="newroute" onClick={handleRoute}>
        Add New
      </a>
    </>
  );
}

export default Address;
