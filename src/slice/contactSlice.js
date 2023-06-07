import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contacts: [],
}
const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts = [...state.contacts, action.payload]
        },
        deleteContact: () => { },
        editContact: () => { }
    }
})
export const {addContact, deleteContact, editContact}=contactSlice.actions;
export default contactSlice.reducer;
