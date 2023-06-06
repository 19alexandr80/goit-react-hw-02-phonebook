import PropTypes from 'prop-types';

export const ContactList = ({ children }) => {
  return <div>{children}</div>;
};

ContactList.propTypes = {
  children: PropTypes.object.isRequired,
};
