import React, { useState } from "react";
import NameList from "./components/NameList/NameList";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
    // create state in app (parent) to receive state

    const [filterValue, setFilterValue] = useState("");
    const handleSubmit = (value) => {
        console.log("The value was " + value);
        setFilterValue(value);
    };
    return (
        <>
            <SearchBar handleSubmit={handleSubmit} />
            <NameList filterValue={filterValue} />
        </>
    );
};

export default App;

// can now put filter value in the NameList
