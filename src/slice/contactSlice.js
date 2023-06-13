import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    },
    editContact: (state, action) => {
      state.contacts = state.contacts.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.newPerson;
        }
        return item;
      });
    },
  },
});
export const { addContact, deleteContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;
