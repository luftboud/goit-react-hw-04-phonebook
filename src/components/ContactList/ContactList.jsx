import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((el, i) => (
        <li key={i}>
          {el.name}: {el.number}
          <button type="button" onClick={() => onDelete(i)} id={i}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};
export { ContactList };
