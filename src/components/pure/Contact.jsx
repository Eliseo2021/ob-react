import React from 'react';
import PropTypes from 'prop-types';
import { ContactClass } from '../../models/contact.class';

const Contact = ({ contact, connected, remove }) => {
  const { name, lastName, email } = contact;

  /*
   * Function that returns a Badge
   * depending on the connection status of the contact
   */
  function contactStatusBadge() {
    if (connected) {
      return (
        <i
          onClick={() => connected(contact)}
          className="bi-toggle-on contact-action"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => connected(contact)}
          className="bi-toggle-off contact-action"
          style={{ color: "grey" }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{name} </span>
      </th>
      <th>
        <span className="ms-2"> {lastName}</span>
      </th>
      <td className="align-middle">
        <span>{email}</span>
      </td>
      <td className="align-middle">
        {/* Execution of function to return badge element */}
        {contactStatusBadge()}
        <i
          className="bi-trash contact-action"
          style={{ color: "tomato" }}
          onClick={() => remove(contact)}
        ></i>
      </td>
    </tr>

  );
};

Contact.propTypes = {
  contact: PropTypes.instanceOf(ContactClass).isRequired,
  connected: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default Contact;
