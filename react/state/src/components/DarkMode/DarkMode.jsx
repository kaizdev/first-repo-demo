import styles from "../../global.module.scss";
import { useState } from "react";
import btnIcon from "../../assets/play-button-svgrepo-com.svg";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const backgroundClasses = isDarkMode
        ? styles.black_background
        : styles.default_background;

    return (
        <div className={backgroundClasses}>
            <h1>Dark Mode Toggle Challenge</h1>
            <button onClick={toggleDarkMode}>
                <img src={btnIcon} alt="SVG logo" />
                {isDarkMode ? "Change to light mode" : "Change to dark mode"}
            </button>
        </div>
    );
};

export default DarkMode;
