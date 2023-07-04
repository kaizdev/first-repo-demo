import { useEffect, useState } from "react";
import style from "./Form.module.scss";

export const ControlledForm = ({ handleSubmit }) => {
    //* If we use state for every field, we have lots of repeated code

    const defaultValues = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    };

    const [formValues, setFormValues] = useState(defaultValues);

    const [isFormValid, setIsFormValid] = useState(false);

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

    const onSubmit = (event) => {
        event.preventDefault();
        // const data = {username: username, email: email}
        // const data = { username, email };
        handleSubmit(formValues); // we want the data from this form to go into handleSubmit. Pass in the form state
        setFormValues(defaultValues);
    };

    const onInputChange = (event) => {
        const { name, value } = event.target; // destructured the event.target object which has all the names and values - the names are the username, email, password, passwordConfirm
        // console.log({ name, value });
        setFormValues({ ...formValues, [name]: value });
    };

    // this useEffect will run anytime the formValues changes. We needed to move this out from onInputChange, as we needed this to occur AFTER setFormValues runs
    useEffect(() => {
        const isValid = validateForm(formValues);
        setIsFormValid(isValid);
    }, [formValues]);

    const validateForm = (data) => {
        if (data.username === "") return false;
        if (data.email === "") return false;
        if (data.password === "") return false;
        if (data.passwordConfirm !== data.password) return false;
        return true;
    };

    return (
        <form className={style.form} onSubmit={onSubmit}>
            <div className={style.field}>
                <label htmlFor="usernameInput">Username</label>
                <input
                    type="text"
                    name="username"
                    id="usernameInput"
                    value={formValues.username}
                    onChange={onInputChange}
                />
            </div>

            <div className={style.field}>
                <label htmlFor="emailInput">Email</label>
                <input
                    type="email"
                    name="email"
                    id="emailInput"
                    value={formValues.email}
                    onChange={onInputChange}
                />
            </div>

            <div className={style.field}>
                <label htmlFor="passwordInput">Password</label>
                <input
                    type="password"
                    name="password"
                    id="passwordInput"
                    value={formValues.password}
                    onChange={onInputChange}
                />
            </div>

            <div className={style.field}>
                <label htmlFor="passwordConfirmInput">
                    Password Confirmation
                </label>
                <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirmInput"
                    value={formValues.passwordConfirm}
                    onChange={onInputChange}
                />
            </div>

            <div className={style.field}>
                <button disabled={!isFormValid}>Register</button>
            </div>
        </form>
    );
};
