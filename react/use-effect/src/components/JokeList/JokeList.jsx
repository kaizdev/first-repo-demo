import React from "react";

export const JokeList = ({ jokes }) => {
    return (
        <ul>
            <li>
                {jokes.map((jokeData) => (
                    <li>
                        key={jokeData.id} {jokeData.joke}
                    </li>
                ))}
            </li>
        </ul>
    );
};
