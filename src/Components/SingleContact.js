import React from 'react';
import PP from './Avatar.jpeg';
import EditContact from './EditContact';
import { Stack, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../slice/contactSlice';

function SingleContact(props) {
  const dispatch = useDispatch();
  return (
    <>
      <Stack direction="horizontal" gap={3} className="now todo-row">
        <Image src={PP} alt="" width={40} roundedCircle />
        <h6>{props.user.name}</h6>
        <h6>{props.user.number}</h6>
        <div className=" ms-auto">
          <h6>{props.user.location}</h6>
        </div>
        <div className="icons">
          <EditContact user={props.user} editContact={props.editContact} />
          <span
            className="deleteIcon"
            onClick={() => {
              dispatch(deleteContact(props.user.id));
            }}
          >
            ✖
          </span>
        </div>
      </Stack>
    </>
  );
}

export default SingleContact;
