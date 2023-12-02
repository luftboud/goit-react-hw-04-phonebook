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

  const handleChange = (name, value) => {
    if (name == "name") {
      setName(value)
    }
    if (name == "number") {
      setNumber(value)
    }
  };
  const handleSubmit = (contName, phNumber) => {
    const isAdded = contacts.find(el => el.name === name);
    if (isAdded !== undefined) {
      window.alert(
        `Contact "${contName}" is already in your phonebook. Please, try something else!`
      );
      return
    } 
    if (contName === '' || phNumber === '') {
      window.alert('Please, fill all fields.');
      return
    }
    setContacts([...contacts, {name: contName, number: phNumber}])
  };
  const handleSearch = evt => {
    const value = evt.target.value;
    setFilter(value)
  };
  const handleDelete = i => {
    const arr = contacts.filter(el => el.id !== i);
    setContacts(arr)
  };
  const filterContacts = () => {
    if (filter === '') {
      return
    } 
    // console.log(contacts.filter(el =>
    //      el.name.toLowerCase().includes(filter.toLowerCase())));
  //  ???
    
  };
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          contName={name}
          phNumber={number}
        />
        <h2>Contacts</h2>
        {filterContacts()} 
        <Filter onChange={handleSearch} />
        <ContactList contacts={contacts} onDelete={handleDelete} />
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
