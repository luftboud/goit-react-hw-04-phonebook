import PropTypes from 'prop-types';
const ContactForm = ({ onSubmit, onChange, contName, phNumber }) => {
   const handleChange = evt => {
    const { name } = evt.target;
    const value = evt.target.value;
    onChange(name, value)
    // console.log('handleChange');
  };
  return (
    <form onSubmit={(e)=>{e.preventDefault(); onSubmit(contName, phNumber)}}>
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
  onChange: PropTypes.func.isRequired,
};
export { ContactForm };
