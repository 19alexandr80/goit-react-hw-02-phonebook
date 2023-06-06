import PropTypes from 'prop-types';
import {
  ContactStyled,
  ContactsLitsStyled,
} from 'components/contactList/ContactListStyled.styled';

export const Contact = ({ ren, onDeleteUser }) => {
  return (
    <ContactsLitsStyled>
      {ren.map(({ id, name, number }) => {
        return (
          <ContactStyled key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={e => onDeleteUser(e.target.dataset.id)}
              data-id={id}
            >
              Delete
            </button>
          </ContactStyled>
        );
      })}
    </ContactsLitsStyled>
  );
};

Contact.propTypes = {
  ren: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};
