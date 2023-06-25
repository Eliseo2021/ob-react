import React, { useRef } from "react";
import PropTypes from "prop-types";
import {ContactClass} from '../../../models/contact.class' 


const ContactForm = ({ add }) => {

    const nameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");

    function addContact(e) {
        e.preventDefault();
        const newContact = new ContactClass(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form
            onSubmit={addContact}
            className="d-flex justify-content-center align-items-center mb-4"
        >
            <div className="form-outline flex-fill">
                <input
                    ref={nameRef}
                    id="inputName"
                    type="text"
                    className="form-control form-control-lg"
                    required
                    autoFocus
                    placeholder="First Name"
                />
                <input
                    ref={lastNameRef}
                    id="inputLastName"
                    type="text"
                    className="form-control form-control-lg"
                    required
                    placeholder="Last Name"
                />
                <input
                    ref={emailRef}
                    id="inputEmail"
                    type="email"
                    className="form-control form-control-lg"
                    required
                    placeholder="Email"
                />
            </div>
            <button type="submit" className="btn btn-success btn-lg ms-2">
                Add
            </button>
        </form>
    );
};

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
};

export default ContactForm;
