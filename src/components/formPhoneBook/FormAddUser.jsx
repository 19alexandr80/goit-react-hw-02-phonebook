import React from 'react';

export class FormAddUser extends React.Component {
  state = {
    name: '',
    number: '',
  };

  ressetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.addUserPhoneBook({
      name: this.state.name,
      number: this.state.number,
    });
    this.ressetForm();
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Neme Surname"
            value={this.state.name}
            onChange={this.inputChange}
            required
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="number"
            required
            placeholder="+3 80..."
            value={this.state.number}
            onChange={this.inputChange}
          />
        </label>
        <button type="submit">Add user</button>
      </form>
    );
  }
}
