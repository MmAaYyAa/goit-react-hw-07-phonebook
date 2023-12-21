import {useSelector, useDispatch} from 'react-redux';
import {filterContacts} from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import { FilterText, FilterForm, FilterTitle } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';

const Filter = () => {
  const {filter} = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilter =  ({ target: { value } })  => {
    dispatch(filterContacts(value));
     };
  return (
    <>
      <FilterTitle>Contacts</FilterTitle>
      <FilterForm>
        <FilterText>Find contacts by name</FilterText>
        <Input
          type="text"
          onChange={handleFilter}
          value={filter}
          placeholder="Search contacts..."
        ></Input>
      </FilterForm>
    </>
  );
};
export default Filter;
