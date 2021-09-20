import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSlot } from '../../../redux/actions/slot';
import './slotdetails.css';

function SlotView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const slots = useSelector((state) => state.slotReducer?.slotData?.b);
  // console.log(slots);
  useEffect(() => {
    dispatch(getSlot());
  }, [slots]);

  const handleRoute = () => {
    history.push('/pickupaddress');
  };
  return (
    <>
      <h1 className="slothead">Slot Details</h1>
      <hr className="horizon" />
      <Table id="tab">
        <thead></thead>
        {slots && slots.length > 0
          ? slots.map((b) => {
              return (
                <>
                  <tbody>
                    <tr id={b._id} className="tableRow">
                      <td colSpan="2" className="dateBody">
                        date
                        <td colSpan="2" className="timeBody">
                          time
                        </td>
                      </td>
                      <td className="dateBody">
                        {b.date}
                        <td className="timeBody">{b.time}</td>
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
                        {b.instructor}
                        <td className="priceBody">{b.price}</td>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })
          : ''}
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
