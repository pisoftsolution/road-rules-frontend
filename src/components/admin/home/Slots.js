import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './All.css'
import { addSlot, editSlot, getSlot } from '../../../redux/actions/slot';

function Slots() {

  const initialState = { date: "", time: "", clientLimit: "", instructor: "", instructorName: "", status: "", booking: "" };
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState("");
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const book = useSelector(state => state.slotReducer?.slotData?.b);
  useEffect(() => {
    dispatch(getSlot())
  }, [shouldCall])
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editSlot(formData, editId))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
        setShow(false);
        setFormData(initialState);
      })
  }
  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addSlot(formData, book))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
      })
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, date, time, clientLimit, instructor, instructorName, status, booking) => {
    setEditId(id)
    setFormData({
      date: date,
      time: time,
      clientLimit: clientLimit,
      instructor: instructor,
      instructorName: instructorName,
      status: status,
      booking: booking,
    })
    setShow(true);
  }
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = (date, time, clientLimit, instructor, instructorName, status, booking) => {
    setFormData({
      date: date,
      time: time,
      clientLimit: clientLimit,
      instructor: instructor,
      instructorName: instructorName,
      status: status,
      booking: booking,
    })
    setShows(true);
  }
  return (
    <div className="Apps">
      <h1 className="headline">Slot</h1>
      <Modal show={show} onHide={handleClose}  >
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
                  placeholder="Enter date"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.date}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
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
                      [e.target.name]: e.target.value,
                    })
                  }}
                  required
                />
              </InputGroup>
              <label>ClientLimit</label>
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
                      [e.target.name]: e.target.value,
                    })
                  }}
                  required
                />
              </InputGroup>
              <label>Instructor</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="instructor"
                  type="text"
                  placeholder="Enter Instructor"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.instructor}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }}
                  required
                />
              </InputGroup>
              <label>InstructorName</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="instructorName"
                  type="text"
                  placeholder="Enter InstructorName"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.instructorName}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }}
                  required
                />
              </InputGroup>
              <label>Status</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="status"
                  type="text"
                  placeholder="Enter Status"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.status}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }}
                  required
                />
              </InputGroup>
              <label>Booking</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="booking"
                  type="text"
                  placeholder="Enter Booking"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.booking}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }}
                  required
                />
              </InputGroup>
              <Button
                className="sub"
                type="submit"
              >
                Update
              </Button>
              <Button
                className="cancel" id="close"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <div>
        <Modal show={shows} onHide={handleCloses}  >
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
                    placeholder="Enter date"
                    type="text"
                    className=""
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
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
                        [e.target.name]: e.target.value,
                      })
                    }}
                    required
                  />
                </InputGroup>
                <label>ClientLimit</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="clientLimit"
                    placeholder="Enter ClientLimit"
                    type="number"
                    className=""
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }}
                    required
                  />
                </InputGroup>
                <label>Instructor</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="instructor"
                    placeholder="Enter Instructor"
                    type="text"
                    className=""
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }}
                    required
                  />
                </InputGroup>
                <label>InstructorName</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="instructorName"
                    placeholder="Enter InstructorName"
                    type="text"
                    className=""
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }}
                    required
                  />
                </InputGroup>
                <label>Status</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="status"
                    placeholder="Enter Status"
                    type="text"
                    className=""
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }}
                    required
                  />
                </InputGroup>
                <label>Booking</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="booking"
                    placeholder="Enter Booking"
                    type="text"
                    className=""
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }}
                    required
                  />
                </InputGroup>
                <Button
                  className="sub"
                  type="submit"
                  onClick={handleCloses}
                >
                  Update
                </Button>
                <Button
                  className="cancel" id="closes"
                  onClick={handleCloses}
                >
                  Close
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <Button
          className="add"
          onClick={() => handleShows()}
        >
          Add Slot
        </Button>
      </div>
      <Table striped bordered hover size="lg">
        <thead >
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>ClientLimit</th>
          <th>Instructor</th>
          <th>InstructorName</th>
          <th>Status</th>
          <th>Booking</th>
          <th>Actions </th>
        </tr>
        </thead>
        {book && book.length > 0 ?
          book.map(b => {
            return (
              <>
              <tbody className="tablecolor">
                <tr key={b._id}>
                  <td className="tabledata">{b.date}</td>
                  <td className="tabledata">{b.time}</td>
                  <td className="tabledata">{b.clientLimit}</td>
                  <td className="tabledata">{b.instructor}</td>
                  <td className="tabledata">{b.instructorName}</td>
                  <td className="tabledata">{b.status}</td>
                  <td className="tabledata">{b.booking}</td>
                  <Button
                    onClick={() => {
                      handleShow(b._id, b.date, b.time, b.clientLimit, b.instructor, b.instructorName, b.status, b.booking)
                    }}
                    className="btn-primary" id="edit"
                  >
                    Edit
                  </Button>
                </tr>
                </tbody>
              </>
            )
          }) : ''}
      </Table>
    </div>
  )
}

export default Slots;
