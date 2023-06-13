import css from './list.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ listWithContacts, getFilteredElement, toDelete }) => {
  return (
    <ul className={css.list}>
      {getFilteredElement
        ? getFilteredElement.map(contact => (
            <li key={contact.id} className={css.li}>
              {contact.name}: {contact.number}{' '}
              <button onClick={() => toDelete(contact.id)}>Delete</button>
            </li>
          ))
        : listWithContacts.map(contact => (
            <li key={contact.id} className={css.li}>
              {contact.name}: {contact.number} <button>Delete</button>
            </li>
          ))}
    </ul>
  );
};

ContactList.propTypes = {
  listWithContacts: PropTypes.array.isRequired,
  getFilteredElement: PropTypes.array.isRequired,
  toDelete: PropTypes.func.isRequired,
};
export default ContactList;
