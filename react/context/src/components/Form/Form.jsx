import React from "react";
import style from "./Form.module.scss";

const Form = ({ onSubmit, children }) => {
    return (
        <form className={style.form} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;

// forms that have children allow us to have props within the Contact Page

// <Form onSubmit={onSubmit}>
// <Input type="text" name="username" hasLabel />
// <Input type="email" name="email" hasLabel />
// <Input
//     type="password"
//     name="password"
//     hasLabel
//     placeholder="enter password"
// />
// <Button>Submit</Button>
