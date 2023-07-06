import React from "react";
import { useState } from "react";

const Counter = ({ initialCountValue = 0 }) => {
    const [count, setCount] = useState(initialCountValue);
    const onIncrementClick = () => {
        setCount(count + 1);
    };

    const onDecrementClick = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h3>
                Count is: <span title="count">{count}</span>
            </h3>
            <button data-testid="resetButton" onClick={() => setCount(0)}>
                Reset
            </button>
            <button data-testid="decreaseButton" onClick={onDecrementClick}>
                -
            </button>
            <button data-testid="increaseButton" onClick={onIncrementClick}>
                +
            </button>
        </div>
    );
};
