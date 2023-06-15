//*1 What is DOM
// Document Object Model

//*2 Why do we use it?
// To make our webpages interactive

/*------------------------------------*\
#       MVP
\*------------------------------------*/

/*
1. When user clicks the change mode btn, the background color changes to dark, texts, borders and btn bg change to light

2. When user enters a task and clicks 'add task' btn, we want to add that task to our task list

3. When the first task is added,the "You have no task" paragraph should disappear

4. Clear the input when a task is added / add btn is clicked

5. Handle empty input - show some error message when the user clicks add btn with a blank input

*/

/* What is the first step?

- We need to select the elements that user will interact with and elements we want to update

- different methods we can use to select the elements

*/

// a variable to store
const taskInput = document.getElementById("taskInput");
console.dir(taskInput);

// what this is, is an object
// something that represents a real life entity
// it has properties that describe it/ describe what it looks like
// it has methods - describe what it can do

// Get back HTML collection - an array-like list
const containers = document.getElementsByClassName("container");
console.log(containers);
console.log(containers[1]);
console.log(containers.length);

//* Node list - querySelectorAll
const buttons = document.querySelectorAll("button"); //! More flexible, but must include the tag/class/etc .class - #id etc.
console.log(buttons);

// this still works but returns only the first element
const btn = document.querySelector("button");
console.log(btn);

//* select one - querySelector
const nothingPara = document.querySelector("p");
console.log(nothingPara);

// To change styling, we could use style property
// If we are changing a lot of things, we can create a class and style it in css, and add it/remove it when the user clicks the button

// Identify which element the user will interact with, add an event listener to it
//& addEventListener()

/* Common event listeners include:
- click
- mouseover
- mouseout
- submit (-> forms)
*/

const modeButton = document.querySelector("#modeBtn");
console.log(modeButton);

const bodyEl = document.querySelector("body");

const heading = document.querySelector("h1");

const addTaskBtn = document.querySelector("#addBtn");

const taskDiv = document.querySelector("#task");

// function logSomething() {
//     console.log("button clicked");
// }

modeButton.addEventListener("click", () => {
    // whatever put here will run every time the user click the button
    console.log("You have clicked the button");

    //? What element do I want to update? // start with button?
    // the buttons variable is where i stored my buttons

    // console.log(buttons[0].classList);
    // console.log(buttons[1].classList);

    //~ Buttons is a Node List => forEach method
    // every object will have a classList
    // toggle can turn off or on the class. also have add & remove...
    buttons.forEach((btn) => {
        console.log(btn.classList);
        btn.classList.toggle("btn--dark-mode");
    });

    //~ containers in HTML collection => cannot use forEach
    // containers.forEach((container)) => {
    //     console.log(container.classList)
    // });

    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.toggle("container--dark-mode");
        console.log(containers[i].classList);
    }

    //only 1 body - no need for loop / iterator
    bodyEl.classList.toggle("body--dark-mode");

    heading.classList.toggle("heading--dark-mode");

    // can access the property directly and assign a value to it
    // bodyEl.style.backgroundColor = "red";
});

const createNewEl = (element, text, parent) => {
    // I need to create an element
    const newEl = document.createElement(element);
    // console.log(newParagraph);
    const textNode = document.createTextNode(text);
    // I need to put the input text inside the element
    newEl.appendChild(textNode);
    // the text lives inside the paragraph tag, so we appendChild
    // I need to tell my paragraph where to go on the page
    parent.appendChild(newEl);
};

// can do a function normally, or do arrow function
// even listener - 2 params - 1st event, then the function
addTaskBtn.addEventListener("click", () => {
    // console.log("You clicked add");
    // if no input value, display an error message
    // alert
    if (taskInput.value === "") {
        return alert("Please enter a task");
    } // return will exit out of the function, so the remaining code doesn't run

    if (document.getElementById("nothingPara")) {
        //need to select it fresh, instead of using a value saved in memory
        taskDiv.removeChild(nothingPara); // remove is on the parent element
    }

    // I need to access text inside my input. Input has a "value" property
    console.log(taskInput.value);
    createNewEl("p", taskInput.value, taskDiv);
    taskInput.value = "";
});
