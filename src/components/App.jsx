import React from 'react';
import { nanoid } from 'nanoid';

import { FormAddUser } from 'components/formPhoneBook/FormAddUser';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  addUserPhoneBook = add => {
    add.id = nanoid();
    // this.setState({ contacts: this.state.contacts.push(add) });
    // this.state.contacts.push(add);
    this.setState(prevState => {
      console.log(prevState.contacts);
      return { contacts: [add] };
    });
  };

  render() {
    return (
      <div>
        <FormAddUser addUserPhoneBook={this.addUserPhoneBook} />
      </div>
    );
  }
}
