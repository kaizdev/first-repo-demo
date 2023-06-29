import { useState } from "react";
import { Counter } from "./components/Counter/Counter";
import Clock from "./components/Clock/Clock";
import { RandomJoke } from "./components/RandomJoke/RandomJoke";
import { JokeLoader } from "./containers/JokeLoader";

function App() {
    const [showCounter, setShowCounter] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (value) => {
        console.log("Searched for " + value);
    };

    return (
        <>
            {/* <RandomJoke /> */}
            {/* <button onClick={() => setShowCounter(!showCounter)}>
                {showCounter ? "Hide Counter" : "Show Counter"}
            </button>
            {showCounter && <Clock />} */}
            <SearchBar />
            <JokeLoader />
        </>
    );
}

export default App;
