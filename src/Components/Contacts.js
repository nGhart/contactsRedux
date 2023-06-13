import React from 'react';
import { useSelector } from 'react-redux';
import SingleContact from './SingleContact';

const Contacts = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  return (
    <>
      {state.contacts.map((contact) => {
        return <SingleContact key={contact.id} user={contact} />;
      })}
    </>
  );
};

export default Contacts;
