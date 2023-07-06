// export const getRandomJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/", {
//         headers: {
//             Accept: "application/json",
//         },
//     });
//     if (!response.ok) {
//         throw new Error("Failed to fetch joke");
//     }
//     const data = await response.json();
//     return data;
// };

// getRandomJoke()
//     .then((data) => console.log(data.joke, data.id))
//     .catch((err) => console.error(err));

// let formValues = { username: "", email: "" };
// console.log({ ...formValues, username: "kai" });

// export const getAllUsers = async () => {
//     const response = await fetch("https://randomuser.me/api/?results=10");
//     const userData = await response.json();
//     return userData.results;
// };

// getAllUsers()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

export const getEbooksBySearch = async (searchString) => {
    const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" + searchString
    );
    if (!response.ok) {
        throw new Error("Failed to fetch eBooks");
    }

    const data = await response.json();
    if (!data.items || !data.items.length === 0) {
        throw new Error("No search results matched your search criteria");
    }

    const bookData = data.items.map((book) => book.volumeInfo);
    return bookData;
};
//     const bookDataClean = data.items.map((book) => {
//         const {
//             volumeInfo: {
//                 authors: [author],
//                 description,
//                 title,
//                 imageLinks,
//             },
//         } = book;
//         return { author, description, title };
//     });
//     return bookDataClean;
// };

getEbooksBySearch("finance")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
