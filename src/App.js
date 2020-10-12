import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm";
import ContactList from "./contactList";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [],
    // name: "",
    // number: "",
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contacts = this.state.contacts;

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    const nameList = contacts.map((contact) => contact.name);
    if (nameList.includes(name)) {
      alert(`${name} is already in contacts.`);
    }

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getSavedContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (taskId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== taskId),
      };
    });
  };

  handleChange = (e) => {
    this.setState({ name: e.target.name });
  };

  render() {
    const { name, contacts, number, filter } = this.state;
    const visibleContacts = this.getSavedContacts();
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onAddTask={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}

        {visibleContacts.length > 0 && (
          <ContactList
            onRemoveContact={this.removeContact}
            contacts={visibleContacts}
          />
        )}
      </>
    );
  }
}
export default App;
