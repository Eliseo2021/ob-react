import React from 'react';
import PropTypes from 'prop-types';
import { ContactClass } from '../../models/contact.class';

const Contact = ({ contact }) => {
  return (
    <div>
      <h2>Nombre: {contact.nombre}</h2>
      <h3>Apellido: {contact.apellido}</h3>
      <h4>Email: {contact.email}</h4>
      <h5>Estado: {contact.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h5>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.instanceOf(ContactClass),
};

export default Contact;
