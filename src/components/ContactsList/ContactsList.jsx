import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';

const ContactsList = () => {
  const getContacts = state =>state.contacts;
  const getFilter = state => state.filter.filter;
  const contacts = useSelector(getContacts );
  const filter = useSelector(getFilter);
  const filteredContacts = (contacts, filter) =>{
    if(!filter) return;

    return contacts.filter(contact => 
       contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const visibleContacts = filteredContacts(contacts, filter);
  
  return (
    <div>
      {(visibleContacts ?? contacts).map(contact => (
        <Contact
          contact={contact}
          key={contact.id}
        />
      ))}
    </div>
  );
};

export default ContactsList;
//const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );