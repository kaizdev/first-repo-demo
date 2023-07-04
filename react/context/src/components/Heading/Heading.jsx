import React from "react";
import style from "./Heading.module.scss";
import { useCallback } from "react";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContextProvider";

const Heading = ({ children }) => {
    const darkMode = useContext(DarkModeContext);
    return (
        <h2 className={darkMode ? style.heading_dark : style.heading_light}>
            {children}
        </h2>
    );
};

export default Heading;
