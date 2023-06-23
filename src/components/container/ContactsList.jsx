import React from 'react'
import { ContactClass } from '../../models/contact.class';
import Contact from '../pure/Contact';

const ContactsList = () => {
    const defaultContact = new ContactClass('John', 'Doe', 'john.doe@example.com', true);

  return (
    <div>
            <div>
                <h1>Contacts List:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <Contact contact={defaultContact} />
        </div>
  )
}

export default ContactsList