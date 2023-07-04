import { useContext } from "react";
import style from "./Input.module.scss";
import { DarkModeContext } from "../../context/DarkModeContextProvider";

const Input = ({ type, hasLabel, name, error, placeholder }) => {
    const id = name + "input";

    const darkMode = useContext(DarkModeContext);

    return (
        <div className={style.container}>
            {hasLabel && (
                <label
                    className={darkMode ? style.label_dark : style.label_light}
                    htmlFor={id}
                >
                    {name}
                </label>
            )}
            <input
                className={darkMode ? style.input_dark : style.input_light}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
            />
            {error && <figcaption>{error.message}</figcaption>}
        </div>
    );
};

export default Input;

// Why do we have this?
