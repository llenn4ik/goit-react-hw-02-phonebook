import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";

const INITIAL_CONTACT_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = INITIAL_CONTACT_STATE;
  /*
   * Отвечает за обновление состояния
   */
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  /*
   * Вызывается при отправке формы
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact } = this.props;

    addContact({ name, number });
    this.setState({ ...INITIAL_CONTACT_STATE });
  };

    // this.props.addContact(this.state.name, this.state.number);

    // this.setState({ ...INITIAL_CONTACT_STATE });


  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="name"
            placeholder="Enter name"
            value={name}
            name="name"
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          Number
          <input
            type="phone"
            value={number}
            onChange={this.handleChange}
            name="number"
            placeholder="645-17-79"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
          />
        </label>

        <button type="submit">Sign up as {name}</button>
      </form>
    );
  }
}
export default ContactForm;
