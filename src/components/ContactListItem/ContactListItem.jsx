import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { Button } from 'components/ContactListItem/ContactListItem.styled';

const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleContactDelete = () => dispatch(deleteContacts(id));
  return (
    <>
      {name}: {number}
      <Button type="button" onClick={handleContactDelete}>
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
