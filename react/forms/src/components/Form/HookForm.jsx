import React from "react";
import { useForm } from "react-hook-form";
import style from "./Form.module.scss";

const HookForm = ({ formSubmit }) => {
    // we are just destructuring from useForm
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm(); // would add resolver as a param in useForm e.g. useForm({resolver: yupResolver(schema)})

    const exampleSubmit = (data) => {
        console.log(data);
        console.log(errors);
    };
    return (
        <>
            <form className={style.form} onSubmit={handleSubmit(exampleSubmit)}>
                <div className={style.field}>
                    <label htmlFor="usernameInput">Username</label>
                    <input
                        type="text"
                        {...register("username", {
                            required: "please enter a username",
                            minLength: {
                                value: 3,
                                message:
                                    "username must be at least 3 characters",
                            },
                        })}
                        id="usernameInput"
                    />
                    {errors.username && (
                        <p className={style.error}>{errors.username.message}</p>
                    )}
                </div>

                <div className={style.field}>
                    <label htmlFor="emailInput">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        id="emailInput"
                    />
                </div>

                <div className={style.field}>
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        id="passwordInput"
                    />
                </div>

                <div className={style.field}>
                    <label htmlFor="passwordConfirmInput">
                        Password Confirmation
                    </label>
                    <input
                        type="password"
                        {...register("passwordConfirm")}
                        id="passwordConfirmInput"
                    />
                </div>

                <div className={style.field}>
                    <button>Register</button>
                </div>
            </form>
        </>
    );
};

export default HookForm;
