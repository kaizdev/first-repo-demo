import React, { useEffect, useState } from "react";

export const RandomJoke = () => {
    const [jokeData, setJokeData] = useState(null);
    useEffect(() => {
        const fetchJoke = async () => {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                },
            });
        };
    });

    //     fetch("https://icanhazdadjoke.com/", {headers: {
    //         Accept: 'application/json',
    //     },
    // })
    //     .then((response) =>
    //         response.json()).then((data)=> setJokeData(data))
    //     );
    // }, []); // run on mount (empty array)

    const onButtonClick = () => {};

    return (
        <div>
            {jokeData && <p>{jokeData.joke}</p>}
            <button>Refresh Joke</button>
        </div>
    );
};
