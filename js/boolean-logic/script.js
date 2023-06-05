// Boolean Logic
console.log(2 > 1);
console.log(4 < 7);
console.log(5 <= 1);
console.log(3 >= 1);

console.log(2 == "2"); // doesn't check the type, so true
console.log(2 === "2"); // does check the type, so false

console.log(1 != "1"); //false - doesn't check the data type
console.log(1 !== "1"); // true - strict check

//* Logical Operators
//? AND - && - both true

console.log(true && false); // we get false - both sides need to be true

console.log(false && false); // we get false

console.log(1 > 0 && 2 < 5); // returns true as both are true

//? OR - || - one or more true
console.log(true || false); // returns true - as one side is true

console.log(2 > 1 || 4 > 9); // true - as at least one side is true

//? Multiple conditions
console.log((3 > 5 && 2 > 1) || 6 > 7); // checks the expression in the brackets first
console.log(6 < 1 || (2 < 1 && 1 == 2));

//? --- ! not
console.log(!true); // evaluates to false
console.log(!false); // evaluates to true
console.log(!!true); // evaluates to true

//* Falsey values
let someVariable;
console.log(someVariable);

// undefined is a falsey value. so !undefined value is true (opposite)

let someString = "";
console.log(someString);
console.log(!someString); //empty string is a falsey value

let num = 0;
console.log(!num); // 0 is a falsey value

let anotherVar = null;
console.log(!anotherVar); // null is a falsey value

let thirdVar = parseInt("hello");
console.log(thirdVar);
console.log(!thirdVar); // NaN evaluates to false, so opposite is true

let loggedInUser;
console.log(`Welcome, ${loggedInUser || "Guest"}`);
// we get Welcome Guest. If the left hand side is falsey because it is undefined, we get the other side of the operator (which is Guest)

loggedInUser = "John";
console.log(`Welcome, ${loggedInUser || "Guest"}`);
// now we get Welcome John
// ^ notice how the variable gets the priority here rather than the static text

// two falsey values
console.log(null || 0);

console.log("hello" && "hi" && "nology"); // gives the last one nology
