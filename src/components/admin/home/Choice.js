import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './All.css'
function Choice() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }
  return (
    <div className="tab">
      <h4>Why Choose Us</h4>
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header>
          <Modal.Title>Edit a Choice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Choice</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="author"
                  type="text"
                  placeholder="Enter Choice"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Button
                className="sub"
                type="submit"
              >
                Update
              </Button>
              <Button
                className="cancel"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td><Button onClick={handleShow}>Edit</Button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td><Button onClick={handleShow}>Edit</Button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td><Button onClick={handleShow}>Edit</Button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Choice;
