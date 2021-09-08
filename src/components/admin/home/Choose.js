import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './All.css'
import { addChoose, editChoose, getChoose } from '../../../redux/actions/choose';

function Choose() {

  const initialState = { point: "" };
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState("");
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const choice = useSelector(state => state.chooseReducer?.chooseData?.b);
  const editHandler = () => {
    dispatch(editChoose());
  }
  useEffect(() => {
    dispatch(getChoose())
  }, [shouldCall])
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editChoose(formData, editId))
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
    dispatch(addChoose(formData, choice))
      .then(res => {
        console.log(res);
        setShouldCall(!shouldCall);
      })
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, point) => {
    setEditId(id)
    setFormData({
      point: point,
    })
    setShow(true);
  }
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = (point) => {
    setFormData({
      point: point,
    })
    setShows(true);
  }
  return (
    <div className="Apps">
      <h1 className="headline">Why Choose Us</h1>
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header>
          <Modal.Title>Edit a Choice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>Add a Choice</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="point"
                  type="text"
                  placeholder="Enter Choice"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.point}
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
                classpoint="sub"
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
            <Modal.Title>Add a Choice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAddSubmit}>
              <div className="form-group">
                <label>Choice</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="point"
                    placeholder="Enter Choice"
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
          Add Choice
        </Button>
      </div>
      <Table striped bordered hover>
        <tr>
          <th>point</th>
          <th >Actions </th>
        </tr>
        {choice && choice.length > 0 ?
          choice.map(b => {
            return (
              <>
                <tr key={b._id}>
                  <td>{b.point}</td>
                  <Button
                    onClick={() => {
                      editHandler(b._id)
                      handleShow(b._id, b.point)
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

export default Choose;
