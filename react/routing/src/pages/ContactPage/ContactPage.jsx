import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { createMessage } from "../../services/message-service";
import { useNavigate } from "react-router-dom"; // needed to route back home

const ContactPage = () => {
    const navigate = useNavigate();
    // call this function to give it the navigate path

    const onFormSubmit = (value) => {
        createMessage(value).then((response) => {
            console.log("Form Submitted", response);
            navigate("/thanks"); //go back to home page after form submission
        });
    };
    return (
        <main>
            <h2>Contact Page</h2>
            <ContactForm formSubmit={onFormSubmit} />
        </main>
    );
};

export default ContactPage;
