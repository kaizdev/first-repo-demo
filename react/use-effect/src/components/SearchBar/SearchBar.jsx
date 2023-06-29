import React, { useState } from "react";

export const SearchBar = ({ handleSubmit }) => {
    const [searchInput, setSearchInput] = useState("");

    const onChange = (e) => {
        setSearchInput(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(searchInput);
        setSearchInput("");
    };

    return (
        <form action="" onSubmit={onSubmit}>
            <input type="text" value={searchInput} onChange={onchange} />
            <button>Search</button>
        </form>
    );
};
