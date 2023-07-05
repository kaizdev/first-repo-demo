import React from "react";
import { useState } from "react";

const SearchBar = ({ formSubmit, placeholder }) => {
    const [searchInput, setSearchInput] = useState("");
    const handleSubmit = (event) => {
        // prevent the default form behaviour

        // maybe validate the input if needed
        // call the function passed into the component (formSubmit)- with the value of the input

        event.preventDefault();
        // get the value of the input using State
        formSubmit(searchInput); //passing in a function as a prop
        // reset the input section
        setSearchInput("");
    };

    const onSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                placeholder={placeholder}
                value={searchInput} // this is from the state
                onChange={onSearchInputChange}
            />
            <button>Search</button>
        </form>
    );
};

export default SearchBar;
