import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './admin.css';
import { addSlot, editSlot, getSlot } from '../../../redux/actions/slot';
import { getInstructor } from '../../../redux/actions/instructor';

function Slots() {
  const initialState = { date: '', time: '', clientLimit: '', instructor: '' };
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState('');
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const book = useSelector((state) => state.slotReducer?.slotData?.b);
  const instructors = useSelector(
(state) => state.instructorReducer?.instructorData?.b
  );

  useEffect(() => {
    dispatch(getSlot());
    dispatch(getInstructor());
  }, [shouldCall]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editSlot(formData, editId))
    .then((res) => {
      setShouldCall(!shouldCall);
      console.log(res);
      setShow(false);
      setFormData(initialState);
    });
  };
  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addSlot(formData, book))
    .then((res) => {
      console.log(res);
      setShouldCall(!shouldCall);
    });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, date, time, clientLimit, instructor) => {
    setEditId(id);
    setFormData({
      date: date,
      time: time,
      clientLimit: clientLimit,
      instructor: instructor,
    });
    setShow(true);
  };
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = (date, time, clientLimit, instructor) => {
    setFormData({
      date: date,
      time: time,
      clientLimit: clientLimit,
      instructor: instructor
    });
    setShows(true);
  };
  return (
    <div className="Apps">
      <h1 className="headline">Slot</h1>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit a Slot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>Date</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="date"
                  type="text"
                  placeholder="Enter Date"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.date}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    });
                  }}
                  required
                />
              </InputGroup>
              <label>Time</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="time"
                  type="text"
                  placeholder="Enter time Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.time}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    });
                  }}
                  required
                />
              </InputGroup>
              <label>Client Limit</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="clientLimit"
                  type="number"
                  placeholder="Enter ClientLimit"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.clientLimit}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    });
                  }}
                  required
                />
              </InputGroup>
              <label>Instructor</label>
              <select
                    name="instructor"
                    // value={formData.instructorName} 
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      });
                    }}
                    required
                    id="carss"
                  >
                    {instructors && instructors.length > 0
                      ? instructors.map((b) => {
                          return (
                            <>
                            <option value="" disabled selected hidden>select the options..</option>
                              <option value={b._id}>{b.fullName}</option>
                            </>
                          );
                        })
                      : ''}
                  </select>
              <Button className="sub" type="submit">
                Save
              </Button>
              <Button className="cancel" id="close" onClick={handleClose}>
                Close
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <div>
        <Modal show={shows} onHide={handleCloses}>
          <Modal.Header>
            <Modal.Title>Add a Slot</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAddSubmit}>
              <div className="form-group">
                <label>Date</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="date"
                    placeholder="Enter Date"
                    type="text"
                    className=""
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      });
                    }}
                    required
                  />
                </InputGroup>
                <label>Time</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="time"
                    placeholder="Enter Time"
                    type="text"
                    className=""
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      });
                    }}
                    required
                  />
                </InputGroup>
                <label>Client Limit</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="clientLimit"
                    placeholder="Enter ClientLimit"
                    type="number"
                    className=""
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      });
                    }}
                    required
                  />
                </InputGroup>
                <div id="inst">
                  <label>Instructor</label>
                  <select
                    name="instructor"
                    placeholder="Enter Instructor"
                    type="text"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      });
                    }}
                    required
                    id="cars"
                  >
                    {instructors && instructors.length > 0
                      ? instructors.map((b) => {
                          return (
                            <>
                              <option value="" disabled selected hidden>select the options..</option>
                              <option value={b._id} 
                              >{b.fullName}</option>
                            </>
                          );
                        })
                      : ''}
                      
                  </select>
                </div>
                <Button className="sub" type="submit" onClick={handleCloses}>
                  Save
                </Button>
                <Button className="cancel" id="closes" onClick={handleCloses}>
                  Close
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <Button className="add" onClick={() => handleShows()}>
          Add Slot
        </Button>
      </div>
      <Table striped bordered hover size="lg">
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Client Limit</th>
          <th>Instructor</th>
          <th>Actions </th>
        </tr>
        {book && book.length > 0
          ? book.map((b) => {
              return (
                <>
                  <tr key={b._id} className="tablecolor">
                    <td className="tabledata">{b.date}</td>
                    <td className="tabledata">{b.time}</td>
                    <td className="tabledata">{b.clientLimit}</td>
                    <td className="tabledata">{b.instructorName}</td>
                    <Button
                      onClick={() => {
                        handleShow(
                          b._id,
                          b.date,
                          b.time,
                          b.clientLimit,
                          b.instructorName,
                          // b.instructor,
                        );
                      }}
                      className="btn-primary"
                      id="edit"
                    >
                      Edit
                    </Button>
                  </tr>
                </>
              );
            })
          : ''}
      </Table>
    </div>
  );
}

export default Slots;
