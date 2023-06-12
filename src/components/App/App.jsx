import React, { Component } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import css from './app.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = info => {
    const { contacts } = this.state;
    const allName = contacts.map(el => el.name);
    const nameToAdd = info.name;
    const hasName = allName.includes(nameToAdd);

    if (hasName) {
      return alert(`${nameToAdd} is already in contacts`);
    } else
      return this.setState(prevState => ({
        contacts: [...prevState.contacts, info],
      }));
  };

  startFilter = name => {
    this.setState({ filter: name.currentTarget.value });
  };

  getFilteredElement = () => {
    const { contacts, filter } = this.state;

    const oneContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().toString())
    );

    return oneContact;
  };

  deletElement = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.startFilter} />
        <ContactList
          listWithContacts={contacts}
          getFilteredElement={this.getFilteredElement()}
          toDelete={this.deletElement}
        />
      </div>
    );
  }
}
