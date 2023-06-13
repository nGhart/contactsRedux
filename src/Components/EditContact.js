import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../slice/contactSlice';
import Modal from 'react-bootstrap/Modal';

const EditContact = (props) => {
  const [contacts, setContacts] = useState({
    name: props.user.name,
    number: props.user.number,
    location: props.user.location,
    id: props.user.id,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    let newPerson = {
      name: contacts.name,
      number: contacts.number,
      location: contacts.location,
      id: props.user.id,
    };
    dispatch(editContact({ id: props.user.id, newPerson }));
    handleClose();
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>✎</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="mb3" closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalMain">
          <form onSubmit={handleEdit}>
            <div className="main">
              <div>
                <label>Name </label>
                <input
                  type="text"
                  name="name"
                  value={contacts.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Phone Number </label>
                <input
                  className=".to-do-input"
                  type="number"
                  name="number"
                  value={contacts.number}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Location </label>
                <input
                  type="text"
                  name="location"
                  value={contacts.location}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="button">Save</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditContact;
