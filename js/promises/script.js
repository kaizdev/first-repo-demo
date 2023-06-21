//20/06/2023
// What are promises?

// What is asynchronous programming?

// Blocking vs non-blocking code

// Why do we use promises?

// What is an API?

// JavaScript is a single-threaded language
// does one thing at a time

console.log("I'll be first");
console.log("I'll be second");
console.log("I'll be third");

console.log(Date.now());

// But what if things took longer?
// an example of a function that might take longer.
// an example of blocking code (While loops, for loops) -> wait for this to finish before executing rest of program

//* Blocking code
// like cooking popcorn in the microwave - wait until its done, wait in front of your microwave
// when the popcorn is done, finish the rest of the tasks

function wait(ms) {
    let start = Date.now();
    let now = start;

    while (now - start < ms) {
        now = Date.now();
    }
}

document.querySelector("button").addEventListener("click", () => {
    wait(3000);
    alert("You clicked the button");
});

// console.log("I am before the wait function");
// wait(5000);
// console.log("I am after the wait function");

//* Non-blocking code
// cooking anything else in the microwave - put the food in, set the timer, do something else in the meantime
// when it is done, come back to it

//^ setTimeout
// -> will wait but won't stop the rest of the code from executing

console.log("I am before setTimeout"); // 1
setTimeout(() => {
    console.log("I am inside the setTimeout"); // 3
}, 5000); // 2 params (function, delay)
console.log("I am after setTimeout"); // 2

// event loop -> even with a delay of 0 for setTimeout(), it will still be in the same order
// after it executes everything, then JS will go to the queue to execute the queue items

//* Promise
// An action to do in the future / at some point in the future
// it might happen - but it also might not happen
// we don't know the outcome of the promise, until a specified time in the future

// Promises represents the outcome of an asynchronous operation (e.g. setTimeout) - happens in the background while rest of code can run
// Promises are special objects that have 3 states:
/*
    1. fulfilled - things went right
    2. rejected - things went wrong
    3. pending - while waiting for the outcome
*/

//* API
// food ordering app - data requirements:
/*
    - what restaurants are available 
    - what is the menu of each restaurant
    - is it currently open or not
    - what dishes are available on the day we use it
    - know the address of each restaurant (distance from user)
    - pricing of menu items
*/

// we would store this data in a database
// from our frontend, we want to talk to that database somehow, request some information to show to the user

// how do we do it? through an API (application programming interface)
// a way for two pieces of software to talk to each other (middle man between front and back end)
// how does the front end communicate to the backend database? [front end <-> API <-> database]

// an API is like a waiter in a restaurant. [diner <-> waiter <-> chef]
// ordering some data from the database via an API, which is why we have promises (pending... then either fulfilled or rejected)

// in real life, you will rarely create promises yourself using new Promise, you will most likely consume promises
