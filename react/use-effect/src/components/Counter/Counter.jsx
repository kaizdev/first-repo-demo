import React, { useEffect, useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(true);

    useEffect(() => {
        console.log("effect runs");
        document.title = `Count: ${count}`;
        return () => {
            document.title = "Use Effect";
        };
    }, [count]);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <span onClick={() => setBool(!bool)}>{bool.toString()}</span>
        </div>
    );
};
