// Wed - 21/06/2023

// A function that randomly rejects or resolves a promise

// random dinner generator

const meals = [
    {
        name: "Pizza",
        type: "dinner",
    },
    {
        name: "Oats",
        type: "breakfast",
    },
    {
        name: "Fried eggs",
        type: "breakfast",
    },
    {
        name: "Roast chicken",
        type: "dinner",
    },
    {
        name: "Sandwich",
        type: "lunch",
    },
    {
        name: "Pasta",
        type: "dinner",
    },
];

const randomFood = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // how do I generate numbers that are inbounds for my array?
            const randomIndex = Math.floor(Math.random() * arr.length);
            if (arr[randomIndex].type === "dinner") {
                resolve(arr[randomIndex]);
            } else {
                reject("Sorry, no dinner tonight");
            }
            // console.log(randomIndex);
        }, 2000);
    });
};

// randomFood(meals)
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => console.log(error));

const btn = document.querySelector("button");
const resultDiv = document.querySelector("#result");
const loading = document.querySelector("h2");

btn.addEventListener("click", () => {
    // I want to show the user that things are happening -> I am waiting for a promise to stop pending.

    // check if existing div is there, and if so, remove.
    if (document.querySelector("p")) {
        resultDiv.removeChild(document.querySelector("p"));
    }

    if (document.querySelector("h3")) {
        resultDiv.removeChild(document.querySelector("h3"));
    }

    // Loading as soon as the user clicks the button
    loading.innerText = "Loading...";

    randomFood(meals)
        .then((meal) => {
            console.log(meal);
            // if things go well, I want to add an h3 with the name of dinner

            const heading = document.createElement("h3");
            const textNode = document.createTextNode(meal.name);
            heading.appendChild(textNode);
            resultDiv.appendChild(heading);
        })
        .catch((error) => {
            // add the code that runs when a promise is rejected

            const errorPara = document.createElement("p");
            const errorMessage = document.createTextNode(error);
            errorPara.appendChild(errorMessage);
            resultDiv.appendChild(errorPara);
        })
        .finally(() => {
            loading.innerText = "";
        });
});
