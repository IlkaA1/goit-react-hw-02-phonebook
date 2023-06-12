const Contact = ({ getFilteredElement }) => {
    return { getFilteredElement.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))};
};

export default Contact;
