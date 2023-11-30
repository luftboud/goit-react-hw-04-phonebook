import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let contactsArr = [];
  const handleChange = evt => {
    const { name } = evt.target;
    const value = evt.target.value;
    if (name == "name") {
      setName(value)
    }
    if (name == "number") {
      setNumber(value)
    }
    console.log('handleChange');
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const isAdded = contactsArr.find(el => el.name === name);
    if (isAdded === undefined) {
      if (name === '' || number === '') {
        window.alert('Please, fill all fields.');
      } else {
        contactsArr.push({
          name: name,
          number: number,
          id: nanoid(),
        });
        // console.log(contactsArr);
        setContacts(contactsArr)
        evt.currentTarget.reset();
      }
    } else {
      window.alert(
        `Contact "${name}" is already in your phonebook. Please, try something else!`
      );
    }
    console.log("handleSubmit");
  };
  const handleSearch = evt => {
    const value = evt.target.value;
    setFilter(value)
    console.log('handleSearch');
  };
  const handleDelete = evt => {
    const { id } = evt.target;
    const index = contacts.findIndex(el => el.id === id);
    contactsArr.splice(index, 1);
    setContacts(contactsArr)
    console.log('handleDelete');
  };
  const filterContacts = () => {
    if (filter === '') {
      contactsArr = contacts;
    } else {
      const filtredArr = contacts.filter(el =>
        el.name.toLowerCase().includes(filter)
      );
      contactsArr = filtredArr;
    }
  };
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        <h2>Contacts</h2>
        {filterContacts()}
        <Filter onChange={handleSearch} />
        <ContactList contacts={contactsArr} onDelete={handleDelete} />
      </div>
    );
  }
  // componentDidMount() {
  //   const localContacts = localStorage.getItem('contacties');
  //   const localContactsParsed = JSON.parse(localContacts);
  //   if (localContactsParsed == null) {
  //     return
  //   } else {
  //     this.setState({ contacts: localContactsParsed })
  //   }
  // }
  // componentDidUpdate() {
  //   localStorage.setItem('contacties', JSON.stringify(this.state.contacts));
  // }
export { App };
