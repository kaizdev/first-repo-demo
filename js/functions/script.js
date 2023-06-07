//^ 1. What are functions?

// - blocks of code that perform a certain task, that we can reuse
// - writing instructions of what we want to happen, giving them a name
// - every time we call the function (use the function), we run those instructions;

//^ 2. Why do we need functions?

// - To avoid repeating code, to avoid bugs
// - less chance of getting it wrong (check that the main function is correct once)

const student1 = "Jane";
const student2 = "John";
const student3 = "Kate";

// Instead of this...
// console.log(`Hello, my name is ${student1}`);
// console.log(`Hello, my name is ${student2}`);
// console.log(`Hello, my name is ${student3}`);

// Use functions...
// when declaring a function -> parameters (placeholder)
// when calling the function -> argument
function introduceYourself(name) {
    // do something with the data
    const introductionStr = `Hello, my name is ${name}`;
    return introductionStr;
}
console.log(introduceYourself("Kai"));

//* Requirements for functions
//& Parameters are optional
// In JS we have a data object

function getCurrentDate() {
    const today = new Date();
    return today.toDateString();
}

console.log(getCurrentDate());

//& We can have functions that don't use the return keyword
function printSomething(something) {
    console.log(something); // if i get rid of the return keyword, the function will return a default value -> undefined
}

printSomething("Hi");

// default return of any value is 'undefined'. for eg. when you don't return something

const myFunctionReturn = printSomething("nology");
console.log(myFunctionReturn, "returned value");

//^ Arrow functions - different syntax for a function. An arrow function is an anonymous function that we store in a variable
// declare variableName = (parameters) => {code}

// const rectangleArea = (width, height) => {
//     const area = width * height;
//     return area;
// }

const rectangleArea = (width, height) => {
    return width * height;
};

const calculatedArea = rectangleArea(4, 5);
console.log(calculatedArea);

// In certain situations, when using arrow functions, we can skip the return keyword if it is just a 1 line function. It is implied that the function returns the value
//! Only possible with 1 line of code. If multiple steps, use curly brackets and add *return* keyword
const shorterArea = (width, height) => width * height;
console.log(shorterArea(4, 5));

// Arrow functions need to be initialised first, then run the function after that initialisation
console.log(printSomething("I was called before function was declared")); //-> undefined due to no return value

// function declarations are hoisted up (we can use them before they are declared)
// Ideally create functions using const to avoid overwriting the function using a let or re-assign
