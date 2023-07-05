import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import FlexWrap from "./components/FlexWrap";
import SearchBar from "./components/SearchBar/SearchBar";
import JokesLoader from "./components/JokesLoader/JokesLoader";
import JokeSearchProvider from "./context/JokeSearchProvider";
import JokeSearchPage from "./pages/JokeSearchPage";

function App() {
    // in this function, we want to take the param values
    const jokeSubmit = (value) => console.log("You searched for jokes:", value);
    const peopleSubmit = (val) => console.log("You searched for people", val);
    return (
        <>
            {/* <FlexWrap>
                <Card title="first card" content="I am a card" startCount={5}>
                    Some Text
                </Card>
                <Card
                    title="Second card"
                    content="I am also a card"
                    startCount={10}
                >
                    <p>A paragraph tag</p>
                </Card>
            </FlexWrap> */}
            <JokeSearchProvider>
                <JokeSearchPage />
            </JokeSearchProvider>
        </>
    );
}

export default App;
