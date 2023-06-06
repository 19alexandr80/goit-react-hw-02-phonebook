import React from 'react';
import { nanoid } from 'nanoid';

import { FormAddUser } from 'components/formPhoneBook/FormAddUser';
import { Filter } from 'components/contactList/Filter';
import { ContactList } from 'components/contactList/ContactList';
import { Contact } from 'components/contactList/Contact';

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

  onDeleteUser = eId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => {
          return id !== eId;
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
    return (
      <AppStyled>
        <h1>Phonebook</h1>
        <FormAddUser addUserPhoneBook={this.addUserPhoneBook} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.onChangeFilter} />
        {ren.length !== 0 && (
          <ContactList>
            <Contact ren={ren} onDeleteUser={this.onDeleteUser} />
          </ContactList>
        )}
      </AppStyled>
    );
  }
}
