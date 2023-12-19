import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { useState } from 'react';
import {
  Form,
  Input,
  ContactFormButton,
  ContactFormTitle,
} from './ContactForm.styled';

 export const ContactForm = ()=> {
  const[name,setName]= useState('');
  const[number,setNumber]= useState('');
  const getContacts = state =>state.contacts;
  const contacts = useSelector(getContacts );
  const dispatch = useDispatch();

  const handleInputChange = event => {
    if(event.target.name === 'name') setName(event.target.value.trim());
    if(event.target.name === 'number') setNumber(event.target.value.trim());
  };

  const handleFormSubmit = event => {
    event.preventDefault();
   const dataForm = {name: name, number: number};
   const existingContact = contacts.find(
          contact => contact.name.toLowerCase() === dataForm.name.toLowerCase()
         );
        if (existingContact) {
           return alert(`${dataForm.name} is already in contacts`);
        }
        dispatch(addContact(dataForm));
    setName('');
    setNumber('');
  };

    return (
      <>
        <ContactFormTitle>Phonebook</ContactFormTitle>
        <Form onSubmit={handleFormSubmit}>
          <label>
            Name
            <Input
              onChange={handleInputChange}
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            ></Input>
          </label>
          <label>
            Number
            <Input
              onChange={handleInputChange}
              type="tel"
              name="number"
              placeholder="Enter phone number"
              value={number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
            ></Input>
          </label>
          <ContactFormButton type="submit">Add contact</ContactFormButton>
        </Form>
      </>
    );
  
}

export default ContactForm;
//const createContacts = dataForm => {
  //     const existingContact = contacts.find(
  //       contact => contact.name.toLowerCase() === dataForm.name.toLowerCase()
  //     );
  //     if (existingContact) {
  //       return alert(`${dataForm.name} is already in contacts`);
  //     }
  
  //     const newContact = {
  //       ...dataForm,
  //       id: nanoid(),
  //     };