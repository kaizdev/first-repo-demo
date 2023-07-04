import React from "react";
import style from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactForm = ({ formSubmit }) => {
    const schema = yup.object({
        name: yup.string().required("Please enter your Name"),
        email: yup
            .string()
            .required("Please enter your email")
            .email("Must be a valid email address"),
        message: yup
            .string()
            .required("Please enter a message")
            .min(25, "message must be at least 25 chars"),
    });

    const {
        register,
        handleSubmit, // handleSubmit will check if form is valid
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    return (
        <form onSubmit={handleSubmit(formSubmit)} className={style.form}>
            <div className={style.field}>
                <label htmlFor="nameInput">Name</label>
                <input type="text" id="nameInput" {...register("name")} />
                {errors.name && (
                    <p className={style.error}>{errors.name.message}</p>
                )}
            </div>
            <div className={style.field}>
                <label htmlFor="emailInput">Email</label>
                <input type="email" id="emailInput" {...register("email")} />
                {errors.email && (
                    <p className={style.error}>{errors.email.message}</p>
                )}
            </div>

            <div className={style.field}>
                <label htmlFor="messageInput">Message</label>
                <textarea id="messageInput" {...register("message")}></textarea>
                {errors.message && (
                    <p className={style.error}>{errors.message.message}</p>
                )}
            </div>
            <button>Contact Me</button>
        </form>
    );
};

export default ContactForm;
