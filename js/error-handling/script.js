import { createTextEl } from "./dom-utils.js";
import { divide } from "./utils.js";

// a page that divides 2 numbers
const form = document.querySelector("form");
const resultSection = document.querySelector("section");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form); //access each input value using FormData

    const num1 = +data.get("number1"); // add + to convert to number
    const num2 = +data.get("number2");

    // console.log(num1, num2); // typeof string by default -> as this is a form

    // remove existing p if it exists using truthy value..
    if (document.querySelector("p")) {
        resultSection.removeChild(document.querySelector("p"));
    }

    try {
        const result = divide(num1, num2);
        createTextEl("p", result, resultSection, ["success"]);

        // if it goes well, create a p, add it to the section, and add the result to the para
    } catch (error) {
        console.log(error.message);
        // display an error message to the user
        createTextEl("p", error.message, resultSection, ["error"]); // no result to display, but we can display error object / error message
    } finally {
        form.reset(); // want this to occur regardless of error/non-error - clear the form upon submission
    }
});
