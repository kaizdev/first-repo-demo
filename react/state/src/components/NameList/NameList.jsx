import React from "react";
import namesData from "../../data/names.json";

export const NameList = ({ filterValue }) => {
    console.log(namesData);
    return (
        <ul>
            {namesData
                .filter((name) =>
                    name.toLowerCase().includes(filterValue.toLowerCase())
                )
                .map((name, index) => {
                    return <li key={index}>{name}</li>;
                })}
        </ul>
    );
};

export default NameList;
