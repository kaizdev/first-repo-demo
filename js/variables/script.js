//^ const - stays the same, has the same value, can't reassign the value
// name must be meaningful - camelCase

const myHeight = "173 cm";
console.log(myHeight);

console.log("My height is " + myHeight);

//* template string
console.log(`My height is ${myHeight}`);
console.log(`Your height is ${myHeight}`);

//^ let - value can change, we can reassign it
let myName = "Kai";
console.log(`Hi, my name is ${myName}`);

myName = "Kate";
console.log(`Now my name is ${myName}`);

//* Prompt - get input from the user via the browser
// I want to get 2 variables from the user

let firstNumber = prompt("Please enter the first number: ");
console.log(firstNumber);
let secondNumber = prompt("Please enter the second number: ");
console.log(secondNumber);

// We want to add two numbers together

const sumOfNumbers = parseInt(firstNumber) + parseInt(secondNumber);

// Print the answer to the console

console.log(sumOfNumbers);

//! var (do not use) - certain issues with global var declarations
// Not scope safe
