import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './All.css'
import { addInstructor, editInstructor, getInstructor } from '../../../redux/actions/instructor';

function Instructor() {

  const initialState = { fullName: "", phone: "", email: "" };
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState("");
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const instructors = useSelector(state => state.instructorReducer?.instructorData?.b);
  useEffect(() => {
    dispatch(getInstructor())
  }, [shouldCall])
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editInstructor(formData, editId))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
        setShow(false);
        setFormData(initialState);
      })
  }
  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addInstructor(formData, instructors))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
      })
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, fullName, phone, email) => {
    setEditId(id)
    setFormData({
      fullName: fullName,
      phone: phone,
      email: email,
    })
    setShow(true);
  }
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = (fullName, phone, email) => {
    setFormData({
      fullName: fullName,
      phone: phone,
      email: email,
    })
    setShows(true);
  }
  return (
    <div className="Apps">
      <h1 className="headline">Instructor</h1>
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header>
          <Modal.Title>Edit a Instructor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>FullName</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="fullName"
                  type="text"
                  placeholder="Enter FullName"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }}
                  required
                />
              </InputGroup>
              <label>Phone</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="phone"
                  type="text"
                  placeholder="Enter Phone Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }}
                  required
                />
              </InputGroup>
              <label>Email</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="email"
                  type="text"
                  placeholder="Enter Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.email}
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
            <Modal.Title>Add a Instructor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAddSubmit}>
              <div className="form-group">
                <label>FullName</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="fullName"
                    placeholder="Enter FullName"
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
                <label>Phone</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="phone"
                    placeholder="Enter Phone Number"
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
                <label>Email</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="email"
                    placeholder="Enter Email"
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
          Add Instructor
        </Button>
      </div>
      <Table striped bordered hover>
        <tr>
          <th>FullName</th>
          <th>Phone</th>
          <th>Email</th>
          <th >Actions </th>
        </tr>
        {instructors && instructors.length > 0 ?
          instructors.map(b => {
            return (
              <>
                <tr key={b._id}>
                  <td className="tabledata">{b.fullName}</td>
                  <td className="tabledata">{b.phone}</td>
                  <td className="tabledata">{b.email}</td>
                  <Button
                    onClick={() => {
                      handleShow(b._id, b.fullName, b.phone, b.email)
                    }}
                    className="btn1" id="edit"

                  >
                    Edit
                  </Button>
                </tr>
              </>
            )
          }) : ''}
      </Table>
    </div>
  )
}

export default Instructor;
