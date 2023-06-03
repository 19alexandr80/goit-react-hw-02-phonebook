import PropTypes from 'prop-types';
import {
  ContactsLitsStyled,
  ContactStyled,
} from 'components/contactList/ContactListStyled.styled';

export const ContactList = ({ contacts, onDeleteUser }) => {
  return (
    <ContactsLitsStyled>
      {contacts.map(contact => {
        return (
          <ContactStyled key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button type="button" onClick={onDeleteUser} data-id={contact.id}>
              Delete
            </button>
          </ContactStyled>
        );
      })}
    </ContactsLitsStyled>
  );
};
export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Name
      <input
        type="text"
        name="filter"
        placeholder="Neme Surname"
        value={filter}
        onChange={onChange}
        required
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};
