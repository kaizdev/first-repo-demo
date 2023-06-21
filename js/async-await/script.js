// Async, Await

// We use them to make our code easier to read.

// async await is just SYNTACTIC SUGAR
// basically, something that does the same thing as our .then, but we have a nicer way to writing things
// there is no extra functionality added to JS with Async Await...

//* ASYNC
// we need to add async at the beginning of a function

async function someFunction() {} // this creates an async function // non-blocking function.
const anotherFunction = async () => {}; // this is also async

//! Async will ALWAYS return a promise

// async function answer() {
//     return 22;
// }

// const result = answer();
// console.log(result); // returns a promise

// result.then((value) => console.log(value));

// const problem = async () => {
//     throw new Error("Something went wrong...");
// };

// console.log(problem());

// problem()
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error));

// On it's own, async is not that useful

//* AWAIT (we can only use await for async functions)

//! We can only use await inside async functions
// await pauses the executing of our code until the promise we are waiting for gets resolved.

const slowAdd = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, 3000);
    });
};

async function printAnswer(a, b) {
    console.log(`waiting for the result of adding: ${a}, ${b}`);
    const sum = await slowAdd(a, b); // 3 seconds
    // adding the await keyword pauses the next time until the promise has returned a value
    console.log(sum, "Sum");
    // If i had another function that needs the return from sum, I can call it here. (happens after the await)
}

console.log(`I am outside the async function`); // this will run before the async function

// printAnswer(10, 12);

const slowMinus = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a - b);
        }, 1500);
    });
};

const printAnswers = async (a, b) => {
    const answer1 = await slowAdd(a, b); // 3 seconds
    const answer2 = await slowMinus(a, b); // 1.5 seconds

    console.log(answer1, "answer 1");
    console.log(answer2, "answer 2");
};

printAnswers(5, 3);
