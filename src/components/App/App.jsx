import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  const handleSubmit = (contName, phNumber) => {
    const isAdded = contacts.find(el => el.name === contName);
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
  const handleDelete = id => {
    const arr = contacts.filter((e, i) => i !== id);
    setContacts(arr)
  };
  const filterContacts = () => {
   return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()));
    
  };
  useEffect(() => {
    console.log("mounted.");
    const localContacts = localStorage.getItem('contacts');
    const localContactsParsed = JSON.parse(localContacts);
    if (localContactsParsed === null) {
      console.log("no contacts parsed :( ");
      return
    }
    if (localContactsParsed.length === 0 || localContactsParsed === null) {
      console.log("no contacts saved.");
      return
    } else {
      console.log("rendering contacts...");
      setContacts(localContactsParsed)
    }
  }, []);
  useEffect(() => {
    console.log("setting local storage...");
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  //
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter onChange={handleSearch} />
        <ContactList contacts={filterContacts()} onDelete={handleDelete} />
      </div>
    );
  }

export { App };
