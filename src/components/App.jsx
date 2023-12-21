import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getContacts} from '../redux/selectors';
import { fetchContacts } from '../redux/api';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export const App =  () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
// const[contacts,setContacts]= useState(()=>{
//   return JSON.parse(window.localStorage.getItem('contacts'))?? [];
// });

// const[filter,setFilter]= useState('');

//   const createContacts = dataForm => {
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

//     setContacts( prev =>[newContact, ...prev],
//     );
//   };

//   useEffect(()=>{
//     window.localStorage.setItem('contacts',JSON.stringify(contacts));
//   },[contacts]);

  // const deleteContacts = id => {
  //   setContacts(prev => prev.filter(el => el.id !== id),
  //   );
  // };

  // const handleFilter = ({ target: { value } }) => {
  //   setFilter(value);
  // };

  // const filteredContacts = useMemo(() => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [contacts,filter]);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

    return (
      <>
        <div>
          {/* <h1>Phonebook</h1> */}
          <ContactForm/>
          {/* <h2>Contacts</h2> */}
          <Filter />
          {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
          <ContactsList/>
        </div>
      </>
    );
}

export default App;

//   this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));

// handleCheckUniqueContact = name => {
//   const { contacts } = this.state;
//   const isExistContact = !!contacts.find(contact => contact.name === name);
//   isExistContact && alert('Contact is already exist');
//   return !isExistContact;
// };

// handleRemoveContact = id => {
//   this.setState(({ contacts }) => ({
//     contacts: contacts.filter(contact => contact.id !== id),
//   }));
// };
