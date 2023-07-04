import { createContext } from "react";
import { useState } from "react";
import React from "react";

// having all the things about the darkMode in 1 central location makes it easier to maintain / debug
export const DarkModeContext = createContext(null); // Notice that in the return function below, we have the DarkModeContext.Provider which is grabbing this createContext and passing the value

const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    ); // specify the context of all the components inside the .provider
};

export default DarkModeContextProvider;
