import React from "react";

const SimpleCard = ({ children }) => {
    return (
        <div style={{ width: "200psx", border: "1px solid black" }}>
            {children}
        </div>
    );
};

export default SimpleCard;
