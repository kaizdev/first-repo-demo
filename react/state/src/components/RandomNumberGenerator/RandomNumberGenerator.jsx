import React from "react";
import { useState } from "react";
import btnIcon from "../../assets/play-button-svgrepo-com.svg";

const RandomNumberGenerator = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = (event) => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    };

    return (
        <div>
            <button onClick={generateRandomNumber}>
                <img src={btnIcon} alt="SVG icon" />
                Generate random number
            </button>
            <h3>{randomNumber} </h3>
            <p>
                {randomNumber % 2 === 0
                    ? "The number is even"
                    : "The number is odd"}
            </p>
        </div>
    );
};

export default RandomNumberGenerator;
