import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
    const [searchValue, setSearchValue] = useState("");
    // Use the state to control what the input value is

    const formSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        console.log("search value was: " + searchValue); // how do we pass this onto our names list?
        handleSubmit(searchValue);
        setSearchValue("");
    };

    const onInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <form action="" onSubmit={formSubmit}>
            <input type="text" value={searchValue} onChange={onInputChange} />
            <button>Search</button>
        </form>
    );
};
// prevent default on form or button

// making the input a controlled component
export default SearchBar;
