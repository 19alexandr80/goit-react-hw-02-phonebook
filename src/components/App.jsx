import React from 'react';
import { nanoid } from 'nanoid';

import { FormAddUser } from 'components/formPhoneBook/FormAddUser';
import { ContactList } from 'components/contactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  addUserPhoneBook = add => {
    add.id = nanoid();
    // this.setState({ contacts: [...this.state.contacts, add] });

    this.setState(({ contacts }) => {
      return { contacts: [add, ...contacts] };
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.contacts === this.state.contacts);
  //   console.log('prevProps', prevProps);
  //   console.log('prevState', prevState);
  // }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormAddUser addUserPhoneBook={this.addUserPhoneBook} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
