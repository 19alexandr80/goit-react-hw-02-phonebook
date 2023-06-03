export const ContactList = ({ contacts, onDeleteUser }) => {
  return contacts.map(contact => {
    return (
      <div key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button type="button" onClick={onDeleteUser} data-id={contact.id}>
          off
        </button>
      </div>
    );
  });
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
