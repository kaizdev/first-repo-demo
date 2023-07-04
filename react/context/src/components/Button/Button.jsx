import React from "react";
import style from "./Button.module.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContextProvider";

const Button = ({ children, ...rest }) => {
    // darkMode no longer a prop
    const darkMode = useContext(DarkModeContext);
    return (
        <button
            {...rest}
            className={darkMode ? style.btn_dark : style.btn_light}
        >
            {children}
        </button>
    );
};

export default Button;
