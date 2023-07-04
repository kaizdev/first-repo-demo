import React from "react";
import { ControlledForm } from "./components/Form/ControlledForm";
import { useState } from "react";
import { RefForm } from "./components/Form/RefForm";
import HookForm from "./components/Form/HookForm";

const App = () => {
    const [formSuccess, setFormSuccess] = useState(false);
    const [username, setUsername] = useState("");

    const formSubmit = (data) => {
        console.log("Form submitted");
        console.log(data);
        setFormSuccess(true);
        setUsername(data.username);
    };
    return (
        <>
            {/* <ControlledForm handleSubmit={handleSubmit} /> */}
            <HookForm />
            {formSuccess && <p>Successfully submitted form</p>}
        </>
    );
};

export default App;
