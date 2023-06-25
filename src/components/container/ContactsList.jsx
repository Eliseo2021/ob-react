import React, { useState, useEffect } from 'react'
import { ContactClass } from '../../models/contact.class';
import Contact from '../pure/Contact';

import ContactForm from '../pure/forms/contactForm';
import '../../styles/contact.scss';

const ContactsList = () => {

  // Estado del componente
  const [contacts, setContacts] = useState(
    [
      { name: 'John', lastName: 'Doe', email: 'john.doe@example.com', connected: true },
      { name: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', connected: false },
      // Agrega más contactos si es necesario
    ]
  )

  function connectContact(contact) {
    console.log("Connect this Contact:", contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].connected = !tempContacts[index].connected;
    setContacts(tempContacts);
  }

  function deleteContact(contact) {
    console.log('Detele this contact:', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  function addContact(contact) {
    console.log('Add this contact:', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }


  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div className="card-header p-3">
            <h5>Your Contacts:</h5>
          </div>
          {/* Card Body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status/Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => {
                  return (
                    <Contact
                      key={index}
                      contact={contact}
                      connected={connectContact}
                      remove={deleteContact}
                    ></Contact>
                  );
                })}
              </tbody>
            </table>
          </div>
          <ContactForm add={addContact}></ContactForm>
        </div>
      </div>
    </div>

  )
}

export default ContactsList