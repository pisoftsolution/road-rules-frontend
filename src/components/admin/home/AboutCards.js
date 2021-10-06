import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './admin.css';
import {
  addAboutcards,
  editAboutcards,
  getAboutcards
} from '../../../redux/actions/aboutcards';

function AboutCards() {
  const initialState = { subHeading: '', text: '' };
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState('');
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const aboutcard = useSelector(
    (state) => state.aboutcardsReducer?.aboutcardsData?.b
  );
  useEffect(() => {
    dispatch(getAboutcards());
  }, [shouldCall]);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editAboutcards(formData, editId)).then((res) => {
      console.log(res);
      setShouldCall(!shouldCall);
      setShow(false);
      setFormData(initialState);
    });
  };
  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addAboutcards(formData, aboutcard)).then((res) => {
      console.log(res);
      setShouldCall(!shouldCall);
    });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, subHeading, text) => {
    setEditId(id);
    setFormData({
      subHeading: subHeading,
      text: text
    });
    setShow(true);
  };
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = (subHeading, text) => {
    setFormData({
      subHeading: subHeading,
      text: text
    });
    setShows(true);
  };
  return (
    <div className="Apps">
      <h1 className="headline">About Cards</h1>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Slot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>Sub Heading</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="subHeading"
                  type="text"
                  placeholder="Enter subHeading"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.subHeading}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    });
                  }}
                  required
                />
              </InputGroup>
              <label>Text</label>
              <InputGroup className="mb-3">
                <FormControl
                  name="text"
                  placeholder="Enter Text Here"
                  type="text"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={formData.text}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    });
                  }}
                  required
                />
              </InputGroup>
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
            <Modal.Title>Add About Cards</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAddSubmit}>
              <div className="form-group">
                <label>Sub Heading</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="subHeading"
                    placeholder="Enter Sub Heading"
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

                <label>Text</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="text"
                    placeholder="Enter Text Here"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      });
                    }}
                    required
                  />
                </InputGroup>
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
          Add About Cards
        </Button>
      </div>
      <Table striped bordered hover mt-10>
        <tr>
          <th>Sub Heading</th>
          <th>Text</th>
          <th>Actions </th>
        </tr>
        {aboutcard && aboutcard.length > 0
          ? aboutcard.map((b) => {
              return (
                <>
                  <tr key={b._id} className="tablecolor">
                    <td className="tabledata">{b.subHeading}</td>
                    <td className="tabledata">{b.text}</td>
                    <Button
                      onClick={() => {
                        handleShow(b._id, b.subHeading, b.text);
                      }}
                      className="btn1"
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

export default AboutCards;
