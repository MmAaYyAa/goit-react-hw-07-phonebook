import { createSlice} from '@reduxjs/toolkit';
import {fetchContacts, addContacts, deleteContacts} from '../redux/api';
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      contacts: [],
      isLoading: false,
      error: null,
    },
    extraReducers: builder => {
      builder.addCase(fetchContacts.pending,(state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected,(state,action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContacts.pending,(state, action) => {
        state.isLoading = false;
      })
      .addCase(addContacts.fulfilled, (state,action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContacts.rejected,(state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(deleteContacts.pending, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.filter(contact => contact.id !== action.payload.id)
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    }
  })
 
  export const { addContact, deleteContact } = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;
 