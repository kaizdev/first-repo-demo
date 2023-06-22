import { createCard } from "./dom-utils.js";
import getBreeds from "./data.js";

// Thurs 22/06/23
// Examples of end points

// catfact.ninja/breeds -> breeds
// catfact.ninja/fact -> one fact
// catfact.ninja/facts -> list of facts

// adding a query parameter at the end of the end point, by adding ? (e.g. catfact.ninja/breeds?page=2)
// sometimes instead of an error, you might get an empty array back if the data doesn't exist

// capitalized, read-only

// a function that fetches the breeds
// return data

// create a function that creates a div with a heading and a paragraph
// Heading to be breed name
// para to be the breed country

// make sure to make this function async for the event listener
// getBreeds is async -> returns a promise
// that's why my Event Listener needs another async function so that I can await that promise
document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    document.querySelector("section").innerHTML = "";
    const input = document.querySelector("#pageNo");

    const breedsData = await getBreeds(input.value); // getBreeds is an async function -> so we need to await it. If we don't await it, we get a promise pending..
    console.log(breedsData);

    // I awaited breedsData, now i can do something with it

    // I can create a card for every single cat from breedData
    // breedsData is an array of objects with the different breeds

    breedsData.forEach((breed) => {
        return createCard(
            document.querySelector("section"),
            breed.breed,
            breed.country
        );
    });

    input.value = "";
});
