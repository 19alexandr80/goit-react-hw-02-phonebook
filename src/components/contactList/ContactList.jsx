import PropTypes from 'prop-types';
import { ContactsLitsStyled } from 'components/contactList/ContactListStyled.styled';

export const ContactList = ({ children }) => {
  return <ContactsLitsStyled>{children}</ContactsLitsStyled>;
};

ContactList.propTypes = {
  children: PropTypes.array.isRequired,
};
