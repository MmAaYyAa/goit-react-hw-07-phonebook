import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6581f68902f747c83678eab4.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    async (_, thunkAPI) =>{
    try{
        const response = await axios.get('/contacts');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async ({ name, phone }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name: name, phone: phone });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactsId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactsId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);