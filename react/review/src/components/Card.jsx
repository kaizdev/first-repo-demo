import React, { useState } from "react";

const Card = ({ title, content, children, startCount }) => {
    // destructure props object, which is just {title, content, children}
    // so instead of const Card = (props) => {}

    const [count, setCount] = useState(startCount); // if we want to define startCount as a prop (see App.jsx)

    return (
        <div style={{ border: "1px solid black", width: "200px" }}>
            <h3>{title}</h3>
            <p>{content}</p>
            <h4>{count}</h4>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            {children}
        </div>
    );
};

export default Card;
