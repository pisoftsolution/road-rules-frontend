import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './All.css'
import { addTestimonial, editTestimonial, getTestimonial } from '../../../redux/actions/testimonial';

function Testimonials() {

  const initialState = { name: "", comment: "" };
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState("");
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const testimonials = useSelector(state => state.testimonialReducer?.testimonialData?.b);
  useEffect(() => {
    dispatch(getTestimonial())
  }, [shouldCall])
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editTestimonial(formData, editId))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
        setShow(false);
        setFormData(initialState);
      })
  }
  const handleAddSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(addTestimonial(formData, testimonials))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
      })
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, name, comment) => {
    setEditId(id)
    setFormData({
      name: name,
      comment: comment
    })
    setShow(true);
  }
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = (name, comment) => {
    setFormData({
      name: name,
      comment: comment
    })
    setShows(true);
  }
  return (
    <div className="Apps">
      <h1 className="headline">Testimonials</h1>
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header>
          <Modal.Title>Edit a Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>name</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="name"
                  type="comment"
                  placeholder="Enter name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }}
                  required
                />
              </InputGroup>
              <label>comment</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="comment"
                  placeholder="Enter comment Here"
                  type="comment"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.comment}
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
            <Modal.Title>Add a Testimonial</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAddSubmit}>
              <div className="form-group">
                <label>Heading</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="name"
                    placeholder="Enter Name"
                    type="comment"
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
                <label>Comment</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="comment"
                    placeholder="Enter Comment Here"
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
          Add Testimonial
        </Button>
      </div>
      <Table striped bordered hover>
        <tr>
          <th>Name</th>
          <th >Comment</th>
          <th >Actions </th>
        </tr>
        {testimonials && testimonials.length > 0 ?
          testimonials.map(b => {
            return (
              <>
                <tr key={b._id} className="tablecolor">
                  <td className="tabledata">{b.name}</td>
                  <td className="tabledata">{b.comment}</td>
                  <Button
                    onClick={() => {
                      handleShow(b._id, b.name, b.comment)
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

export default Testimonials;
