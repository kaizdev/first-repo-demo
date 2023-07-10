import React, { useContext, useEffect, useState } from "react";
import { JokeSearchContext } from "../../context/JokeSearchProvider";
import { getJokesBySearch } from "../../services/joke-services";
import JokesList from "../JokesList/JokesList.jsx";

const JokesLoader = () => {
    const [fetchState, setFetchState] = useState("");

    const { jokeSearch } = useContext(JokeSearchContext); // jokeSearch is coming in from the context

    const [jokes, setJokes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("This effect happens");

        if (!jokeSearch) {
            setFetchState("");
            return;
        } //stop the function if nothing is submitted

        setFetchState("LOADING");
        getJokesBySearch(jokeSearch)
            .then((jokes) => {
                setFetchState("SUCCESS");
                setJokes(jokes);
            })
            .catch((err) => {
                setFetchState("ERROR");
                setError(err);
            });
    }, [jokeSearch]);
    return (
        <>
            {fetchState === "LOADING" && jokeSearch && (
                <p>Searching for jokes about: {jokeSearch}</p>
            )}
            {fetchState === "SUCCESS" && <JokesList jokes={jokes} />}
            {fetchState === "ERROR" && <p>{error.message}</p>}
        </>
    );
};

export default JokesLoader;
