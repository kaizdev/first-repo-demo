import React from "react";

const JokesList = ({ jokes }) => {
    return (
        <section>
            <h3 title="joke-heading">Found {jokes.length} jokes</h3>
            {jokes.map((joke) => (
                <p key={joke.id}>{joke.joke}</p>
            ))}
        </section>
    );
};

export default JokesList;
