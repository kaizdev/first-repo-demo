import { useState } from "react";

const Counter = () => {
    // let count = 0;
    const [count, setCount] = useState(0);

    const onPlusClick = (event) => {
        // console.log(event);
        // console.log("You clicked the +");
        // count++;
        setCount(count + 1);
    };

    console.log("rendered the counter component");
    return (
        <div>
            <h2>{count}</h2>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                -
            </button>
            <button onClick={onPlusClick}>+</button>
        </div>
    );
};

export default Counter;
