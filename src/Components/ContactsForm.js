import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addContact } from '../slice/contactSlice'


const ContactsForm = () => {
    const [state, setState] = useState({
        name: "",
        number: "",
        location: ""
    })
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: state.name,
            number: state.number,
            location: state.location,
            id: uuidv1(),
        };
        dispatch(addContact(newContact));
        setState({
            name: "",
            number: "",
            location: "",
        });
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}>
                <div
                    className="mb-3" >
                    <label>Name </label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange} />
                </div>
                <div
                    className="mb-3" >
                    <label>Phone Number </label>
                    <br />
                    <input
                        className='.to-do-input'
                        type="number"
                        name="number"
                        value={state.number}
                        onChange={handleChange} />
                </div>
                <div
                    className="mb-3" >
                    <label>Location </label>
                    <br />
                    <input
                        type="text"
                        name="location"
                        value={state.location}
                        onChange={handleChange} />
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default ContactsForm