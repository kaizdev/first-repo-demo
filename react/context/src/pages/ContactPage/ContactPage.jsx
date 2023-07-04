import React, { useContext } from "react";

import style from "./ContactPage.module.scss";
import SubHeading from "./subcomponents/SubHeading/SubHeading";
import ContactForm from "./subcomponents/ContactForm/ContactForm";
import { DarkModeContext } from "../../context/DarkModeContextProvider";

const ContactPage = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <main className={darkMode ? style.main_dark : style.main_light}>
            <SubHeading />
            <ContactForm />
        </main>
    );
};

export default ContactPage;
