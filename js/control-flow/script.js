// * What is control flow? -->
// The order in which our code gets executed (from top to bottom, unless there is something which changes that order) -->

// * Examples of control flow -->
// conditional block -->
// for loop -->

//* if (condition)
// if condition is truthy, this code will run

if (2 > 1) {
    console.log("hello");
}

//* if (truthy) else (falsey)
const x = null;

if (x) {
    console.log("x is truthy");
} else {
    console.log("x is falsey");
}

// returns x is falsey because null is falsey. If x had a value, it would return truthy
let y = 6;

if (y % 2 == 1) {
    console.log("Y is an odd number");
} else {
    console.log("Y is an even number");
}

//* chaining conditions

// check if the age is >= 18
// check if they have a drivers licence
// if 18 or over and have licence, want a string that says -> "You can drive"

// if 18 or over and no licence, -> "Go and get your licence"
// if under 18 -> "You can't drive"

let age = 17;
let hasLicence = false;

if (age >= 18 && hasLicence) {
    //hasLicence is the same as hasLicence === true
    console.log("You can drive");
} else if (age >= 18 && !hasLicence) {
    //? !hasLicence is the same as hasLicence === false
    console.log("Go and get your licence");
} else {
    console.log("You can't drive");
}

//^ if there is more than 1 condition in an if block that evaluates to true, only the code from first one will get executed.

let score = 90;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

//* Ternary operator
//^    condition ? exprIfTrue : exprIfFalse
let value = 0;
const stringToPrint =
    value > 0 ? "value is greater than 0" : "value is 0 or less than 0";

console.log(stringToPrint);

//* Switch statement -
//^ remember to add breaks. Can have the same output for different types
// More readable than if/else, but only for simple things
let fruit = "pear";

switch (fruit) {
    case "apple":
        console.log("This is an apple");
        break;
    case "orange":
        console.log("This is an orange");
        break;
    case "strawberry":
    case "raspberry":
        console.log("This is a berry");
        break;
    default:
        console.log("I don't know what fruit this is!");
}
