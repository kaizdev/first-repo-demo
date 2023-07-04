import React, { useState } from "react";
import style from "./Form.module.scss";
import { useRef } from "react";

export const RefForm = ({ handleSubmit }) => {
    //* If we use state for every field, we have lots of repeated code

    const defaultValues = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    };

    // const [formValues, setFormValues] = useState(defaultValues);

    // const [isFormValid, setIsFormValid] = useState(false);

    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordConfirm, setPasswordConfirm] = useState("");

    // const onUsernameChange = (e) => {
    //     setUsername(e.target.value);
    // };

    // const onEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };

    const [errorState, setErrorState] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formRef.current); // this is my whole form
        const form = formRef.current;
        const data = new FormData(form);

        const userData = {};
        for (let key of data.keys()) {
            userData[key] = data.get(key);
        }

        const isValid = validateForm(userData);
        if (isValid) {
            handleSubmit(userData);
            form.reset();
        } else {
            //  do real error handling
            setErrorState("Fix form errors");
        }

        console.log(userData);

        // handleSubmit();
        // console.log(data);
        // console.log(data.get("username"));
        // console.log(data.get("email"));
        // console.log(data.get("password"));
        // console.log(data.get("passwordConfirm"));

        // the FormData gets the values from the name attribute on the input
    };

    // this useEffect will run anytime the formValues changes. We needed to move this out from onInputChange, as we needed this to occur AFTER setFormValues runs

    const validateForm = (data) => {
        if (data.username === "") return false;
        if (data.email === "") return false;
        if (data.password === "") return false;
        if (data.passwordConfirm !== data.password) return false;
        return true;
    };

    const formRef = useRef(null);
    console.log("Form rerenders");
    // start with null , initialising with nothing, and starting with formRef. Starts as null but we added it to the form as ref={formRef}

    return (
        <>
            {/* Notice how we tie the ref here as formRef - this is how React knows we want the form. */}
            <form className={style.form} onSubmit={onSubmit} ref={formRef}>
                <div className={style.field}>
                    <label htmlFor="usernameInput">Username</label>
                    <input type="text" name="username" id="usernameInput" />
                </div>

                <div className={style.field}>
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" name="email" id="emailInput" />
                </div>

                <div className={style.field}>
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" name="password" id="passwordInput" />
                </div>

                <div className={style.field}>
                    <label htmlFor="passwordConfirmInput">
                        Password Confirmation
                    </label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirmInput"
                    />
                </div>

                <div className={style.field}>
                    <button>Register</button>
                </div>
            </form>
            {errorState && <p>{errorState}</p>}
        </>
    );
};
