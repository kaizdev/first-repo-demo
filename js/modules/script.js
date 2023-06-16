//^ Always import at the very top of the file
// import via standard way
import { rectangleArea, rectPerim } from "./rectangle.js";

// import default export - doin't need curly braces
import createEl from "./dom-utils.js";

//! Need to add type="module" + add the file extension in the import above!!!

//* What are modules?
// re-usable piece of code
// give them good names that describes what it is for

//* Why do we want to use them?
// we divide our js file into modules
/*
- easier to maintain / debug
- easier to find things 
- easier for other people to understand what is going on
- encourages more modular code -> easier to test
*/

// Script.js is where we actually use the functions - making the calls etc.

const form = document.querySelector("form");

// Selecting elements, adding event listeners etc.
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const w = document.querySelector("#width").value;
    const h = document.querySelector("#height").value;
    const areaToDisplay = rectangleArea(+w, +h);
    console.log(areaToDisplay);
    createEl("p", areaToDisplay, document.querySelector("#area"));
});

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const w = document.querySelector("#width").value;
//     const h = document.querySelector("#height").value;
//     const areaToDisplay = rectangleArea(+w, +h);
//     console.log(areaToDisplay);
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode(areaToDisplay);
//     newP.appendChild(textNode);
//     document.querySelector("#area").appendChild(newP);
// });
