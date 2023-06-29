export const getRandomJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    return data;
};

export const getJokesBySearchTerm = async (searchTerm = "") => {
    const url = searchTerm
        ? `https://icanhazdadjoke.com/search/${searchTerm}`
        : "https://icanhazdadjoke.com/search";
    const response = await fetch(
        `https://icanhazdadjoke.com/search/${searchTerm}`,
        {
            headers: {
                Accept: "application/json",
            },
        }
    );
    const data = await response.json();
    if (data.results.length === 0) {
        throw new Error("No jokes found");
    }
    return data;
};
