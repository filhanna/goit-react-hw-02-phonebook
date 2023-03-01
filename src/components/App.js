import React from 'react';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleAddContact = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(prevState => ({
      contacts: [...prevState['contacts'], event.target[0].value],
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
                onChange={this.handleAddContact}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h1>Contacts</h1>
          <ContactsList contactNames={this.state.contacts} />
        </div>
      </div>
    );
  }
}

// const contactName = this.state.name;

const ContactsList = ({ contactNames }) => {
  return (
    <ul>
      {contactNames.map(contactName => {
        const id = nanoid();
        return <li key={id}> {contactName}</li>;
      })}
    </ul>
  );
};
