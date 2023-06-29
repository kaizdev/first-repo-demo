import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import Card from "./components/Card/Card";
import styles from "./global.module.scss";
import DarkMode from "./components/DarkMode/DarkMode";
import RandomNumberGenerator from "./components/RandomNumberGenerator/RandomNumberGenerator";

const App = () => {
    return (
        <>
            <RandomNumberGenerator />
            <DarkMode />
        </>
    );
};

export default App;
