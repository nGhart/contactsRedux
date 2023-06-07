import React from 'react';
import { Stack, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PP from './Avatar.jpeg';

const Contacts = () => {
const state = useSelector((state)=>{
    return state.userReducer
})
    return (
        <>
             {state.contacts.map((contact)=>{
                return (
                    <Stack
                direction="horizontal"
                gap={3}
                className='now todo-row' key={contact.id}>
                <Image
                    src={PP}
                    alt=''
                    width={40}
                    roundedCircle />
                <h6>{contact.name}</h6>
                <h6>{contact.number}</h6>
                <div
                    className=" ms-auto">
                    <h6>{contact.location}</h6>
                </div>
                <div
                    className='icons'>
                    <span 
                    // onClick={handleShow}
                    >
                        ✎
                    </span>
                    <span
                        className='deleteIcon'
                        // onClick={deleteContact}
                        >
                        ✖
                    </span>
                </div>
            </Stack>
                )
             })}
        </>
    );
}


export default Contacts;
