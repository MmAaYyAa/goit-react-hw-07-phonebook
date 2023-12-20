import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/api';
import { ContactItem, DeleteButton } from '../Contact/Contact.styled';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <ContactItem>
      <li>
        {contact.name}: {contact.phone}
      </li>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

export default Contact;
 // const deleteContacts = id => {
  //   setContacts(prev => prev.filter(el => el.id !== id),
  //   );
  // };