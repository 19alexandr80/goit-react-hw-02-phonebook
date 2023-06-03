export const ContactList = ({ contacts }) => {
  return contacts.map(con => {
    return (
      <div>
        <p key={con.id}>
          {con.name}: {con.number}
        </p>
        <button>off</button>
      </div>
    );
  });
};
