import { useState } from "react";

const SearchBar = ({ formSubmit }) => {
    const [inputVal, setInputVal] = useState("");

    const handleChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmit(inputVal);
        setInputVal("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search"
                value={inputVal}
                onChange={handleChange}
            />
            <input type="submit" value="search" />
        </form>
    );
};

export default SearchBar;
