import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSlotById } from '../../../redux/actions/slot';
import { useLocation } from 'react-router-dom';
import './slotdetails.css';

function SlotView() {
  const search = useLocation().search;
  const b = new URLSearchParams(search).get('id');
  console.log(b);

  const history = useHistory();
  const dispatch = useDispatch();
  const slot = useSelector((state) => state.slotReducer?.slotData?.b);
  console.log(slot);

  useEffect(() => {
    dispatch(getSlotById(b));
  }, [b]);

  const handleRoute = () => {
    history.push('/pickupaddress');
  };
  return (
    <>
      <h1 className="slothead">Slot Details</h1>
      <hr className="horizon" />
      <Table id="tab">
        <tbody>
          {/* <tr  className="tableRow"> */}
          <tr>
            <td colSpan="2" className="dateBody mr-3">
              <div id="dat">Date</div>
              <td colSpan="2" className="timeBody">
                <div className="tim">Time</div>
              </td>
            </td>
            <td className="dateBody">
              {slot?.date}

              <td className="timeBody">{slot?.time}</td>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="instructorBody">
              Instructor
              <td colSpan="2" className="priceBody">
                Price
              </td>
            </td>
            <td className="instructorBody">
              {slot?.instructor}
              <td className="priceBody">{slot?.price}</td>
            </td>
          </tr>
        </tbody>
        <Button className="linkview">View Privacy Policy</Button>
        <Button className="continu" onClick={handleRoute}>
          Continue
        </Button>
        <hr className="line" />
      </Table>
    </>
  );
}
export default SlotView;
