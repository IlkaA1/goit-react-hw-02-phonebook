import React, { Component } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Contact from '../Contact/Contact';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = info => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, info] }));
  };

  startFilter = name => {
    this.setState({ filter: name.currentTarget.value });
  };

  getFilteredElement = () => {
    const { contacts, filter } = this.state;

    const oneContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return oneContact;
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
        <Contact getFilteredElement={this.getFilteredElement()} />
      </div>
    );
  }
}
