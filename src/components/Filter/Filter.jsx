import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { setNameFilter } from 'redux/filtersSlice';
import { FilterName } from 'components/Filter/Filter.styled';
import PropTypes from 'prop-types';

const Filter = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setNameFilter(e.target.value));
  };

  if (contacts.length === 0) {
    return null;
  }

  return (
    <>
      <label>Find contacts by Name </label>
      <FilterName
        type="text"
        name="filter"
        placeholder="Enter filter"
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
