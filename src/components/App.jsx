import React from 'react';
import { nanoid } from 'nanoid';

import { FormAddUser } from 'components/formPhoneBook/FormAddUser';
import { ContactList, Filter } from 'components/contactList/ContactList';
import { AppStyled } from 'components/AppStyled.styled';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  onChangeFilter = e => {
    this.setState(() => {
      return { filter: e.target.value };
    });
  };

  onDeleteUser = e => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => {
          return id !== e.target.dataset.id;
        }),
      };
    });
  };

  addUserPhoneBook = add => {
    if (this.state.contacts.find(el => el.name === add.name)) {
      alert(add.name + ' is already in contacts');
      return;
    }

    add.id = nanoid();
    // this.setState({ contacts: [...this.state.contacts, add] });

    this.setState(({ contacts }) => {
      return { contacts: [add, ...contacts] };
    });
  };
  render() {
    const ren = this.state.contacts.filter(({ name }) => {
      return name.includes(this.state.filter);
    });
    console.log(ren.length);
    return (
      <AppStyled>
        <h1>Phonebook</h1>
        <FormAddUser addUserPhoneBook={this.addUserPhoneBook} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.onChangeFilter} />
        {ren.length !== 0 && (
          <ContactList contacts={ren} onDeleteUser={this.onDeleteUser} />
        )}
      </AppStyled>
    );
  }
}
