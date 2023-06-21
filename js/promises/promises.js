//* Blocking code
/*
Any  type of code where the program can't move on - while loop - while the loop is nothing running else can happen
*/

//* Non-blocking code
/*
 Doesn't stop the program from running. Will be placed in a queue to be executed (which runs after all existing code is run).
 Example is setTimeout()
*/

// example of async code
// console.log("before");
// setTimeout(() => {
//     console.log("I am inside set timeout");
// }, 2000);

// console.log("after");

//* Promises
/*
- Something in the future that may or may not happen
- In JS it is an object that represents an outcome of some async operation that can have different states:
- fulfilled - things went right
- rejected - things went wrong
- pending - waiting for an outcome

Important: We don't want to block our entire code / execution, so it can safely run in the background to wait for the response, and user can still interact with our code
*/

//* APIs
// Application Programming Interface - middleman between two programs that communication (front-end <-> API <-> back-end)

//* How to construct a promise
// Not often do we need to construct a promise

//~ Fulfilled promise

// const myFulfilledPromise = Promise.resolve(
//     "This is the value of the fulfilled promise"
// );

// console.log(myFulfilledPromise);

// Rejected promise
// const rejectedPromise = Promise.reject("This is my rejected promise");
// console.log(rejectedPromise);
// displays as an error in the console. BUT unlike normal errors, it keeps the code running, and things after can continue!

//& I want to delay my promise to simulate waiting for a response from the server (i.e. resolve after a certain amount of time)

const myFulfilledPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("I am a fulfilled promise, you had to wait for me");
        reject("I am a rejected promise");
    }, 2000);
});

console.log("I am before the promise");
// here this will log a pending promise that will get fulfilled after a certain amount of time, I don't have access to the value of the promise.
console.log(myFulfilledPromise);
console.log("I am after the promise");

// I can only access the value after my promise stops pending

// Access the value of the promise (after the promise stops pending)
//~  .then

console.log("I am before  .then");

// both .then and .catch run when a promise is no longer pending
myFulfilledPromise
    .then((value) => {
        console.log("Inside the .then");
        console.log(value);
    })
    // (rejectedValue) => { // won't see this very common
    //     console.log("I get triggered when a promise is rejected");
    //     console.log(rejectedValue);
    // }
    .catch((error) => {
        console.log(error);
        console.log("I happen when a promise gets rejected");
    })
    .finally(() => {
        console.log(
            "I happen after promises stop pending, doesn't matter if they got fulfilled or rejected"
        );
    });

//  try {} catch

// console.log("I am after .then, the program keeps running");

// a function that takes in a number
// if number is positive - resolve the promise

// negative or 0 -> reject

const promiseFunction = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 0) {
                resolve(`The value is ${num}`);
            } else {
                reject(`Invalid value : ${num}`);
            }
        }, 2000);
    });
};

promiseFunction(-2)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
