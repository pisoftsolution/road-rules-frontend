import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './All.css'
import { getUsers } from '../../../redux/actions/users';

function User() {

  const initialState = { fullName: "", email: "", phone: "", role: "" };
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState("");
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const adduser = useSelector(state => state.userReducer?.usersData?.b);
  useEffect(() => {
    dispatch(getUsers())
  }, [shouldCall])
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch((formData, editId))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
        setShow(false);
        setFormData(initialState);
      })
  }
  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch((formData, adduser))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
      })
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, fullName, email, phone, role) => {
    setEditId(id)
    setFormData({
      fullName: fullName,
      email: email,
      phone: phone,
      role: role
    })
    setShow(true);
  }
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  // const handleShows = (fullName, email, phone, role) => {
  //   setFormData({
  //     fullName: fullName,
  //     email: email,
  //     phone: phone,
  //     role: role
  //   })
  //   setShows(true);
  // }
  return (
    <div className="Apps">
      <h1 className="headlines">Users</h1>
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>Name</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="fullName"
                  type="text"
                  placeholder="Enter fullName"
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
              <label>Email</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="email"
                  placeholder="Enter email Here"
                  type="text"
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
              <label>Phone</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="phone"
                  placeholder="Enter Phone Here"
                  type="text"
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
              <label>Role</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="role"
                  placeholder="Enter role Here"
                  type="text"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.role}
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
            <Modal.Title>Add Users</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAddSubmit}>
              <div className="form-group">
                <label>fullName</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="fullName"
                    placeholder="Enter fullName"
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
                    placeholder="Enter Email Here"
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
                    placeholder="Enter Phone Here"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }}
                    required
                  />
                </InputGroup>
                <label>Role</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="role"
                    placeholder="Enter Role Here"
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
        {/* <Button
          className="add"
          onClick={() => handleShows()}
        >
          Add User
        </Button> */}
      </div>
      <Table striped bordered hover mt-10>
        <tr>
          <th>Name</th>
          <th >Email</th>
          <th >Phone</th>
          <th >Role</th>
          <th >Actions </th>
        </tr>
        {adduser && adduser.length > 0 ?
          adduser.map(b => {
            return (
              <>
                <tr key={b._id}>
                  <td className="tabledata">{b.fullName}</td>
                  <td className="tabledata">{b.email}</td>
                  <td className="tabledata">{b.phone}</td>
                  <td className="tabledata">{b.role}</td>
                  <Button
                    onClick={() => {
                      handleShow(b._id, b.fullName, b.email, b.phone, b.role)
                    }}
                    className="btn1" id="view"
                  >
                    ViewDetails
                  </Button>
                </tr>
              </>
            )
          }) : ''}
      </Table>
    </div>
  )
}

export default User;
