import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm";
import ContactList from "./contactList";
import Filter from "./Filter";


const CONTACTS_DATA = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

class App extends Component {
  state = {
    contacts: CONTACTS_DATA,
 
    filter: "",
  };

  addContact = ({ name, number }) => {
    // const contacts = this.state.contacts;
    const { contacts } = this.state;
    const newContact = {
      id: uuidv4(),
      name : "",
      number: "",
    };

    const nameList = contacts.map((contact) => contact.name);
    if (nameList.includes(name)) {
      alert(`${name} is already in contacts.`);
      return
    }

    this.setState(({contacts} ) => {
      return {
        contacts: [...contacts, newContact],
      };
    });
  };
  // ==============
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

  // handleChange = (e) => {
  //   this.setState({ name: e.target.name });
  // };

  render() {
    const {  filter} = this.state;
    const visibleContacts = this.getSavedContacts();
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
    
        <Filter value={filter} onChangeFilter={this.changeFilter} />
      
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
