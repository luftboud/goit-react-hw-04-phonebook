import PropTypes from 'prop-types';
import  { useState } from 'react';
const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   const handleChange = evt => {
    const { name } = evt.target;
     const value = evt.target.value;
     if (name === "name") {
      setName(value)
    }
    if (name === "number") {
      setNumber(value)
    }
  };
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(name, number);  e.target.reset()}}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <h3>Number</h3>
      <input type="tel" name="number" onChange={handleChange}></input>
      <button type="submit">Add contact</button>
    </form>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export { ContactForm };
