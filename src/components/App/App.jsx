import React, { Component } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = info => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, info] }));
    console.log(this.state.contacts);
  };

  startFilter = name => {
    this.setState({ filter: name.currentTarget.value });
    console.log(this.state.filter);
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.startFilter} />
        <ContactList listWithContacts={contacts} />
      </div>
    );
  }
}
