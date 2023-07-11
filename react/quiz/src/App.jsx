import "./App.css";
import { useState, useEffect } from "react";

function App({ initial }) {
    const [input, setInput] = useState(initial);

    const handleChange = (event) => {
        setInput(event.target.value);
        // This console.log never logs the right input value, why?
        // Where could I move log this to see the new value?
    };

    useEffect(() => {
        console.log(input);
    }, [input]);

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} />
        </div>
    );
}

export default App;

// Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
