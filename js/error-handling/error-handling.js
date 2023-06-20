// What happens when JavaScript encounters an error?

// example of error code
// function that calculates total price (add GST to the price)

const GST = 0.1;
const calculateTotal = (price) => price + price * GST;

// ...
// a lot more code here

// GST = 0.15;

// Uncaught TypeError: Assignment to constant variable.
// This error breaks the application and stops execution of remaining code
// console.log(`The total price  is ${calculateTotal(100)}`);

try {
    // some code that could potentially throw an error
} catch (error) {
    // some code that handles my error
    // some clean up, maybe some error message gets displayed to the user
} finally {
    // code that will run if an error occurred or if it didn't (runs in both situations)
    // an example of this - image spinner
}

// In real life, you would just remove the const bug and change it to let. Don't use try, catch to deal with  this error - Uncaught TypeError: Assignment to constant variable.

try {
    GST = 0.15; // If this didn't have an error, this would run
} catch (error) {
    console.log(error.message); // error is an object with a message property. This runs if TRY has an error (doesn't run if TRY is not errored)
} finally {
    console.log(`The total price  is ${calculateTotal(100)}`);
}

console.log("My program keeps running");

//^ Throw keyword
// A function that throws an error

console.log("My program starts running");
// throw "oops, something went wrong..."; // I'm throwing an error and not handling the error

// throw new Error("Oops, something went wrong..."); // wouldnt just add throw in the global score normally, typically in a function..
// Instead of throwing a string, we throw an error object because it has some extra properties that give us more context about what happened and where it happened - STACK TRACE

console.log("my program keeps running"); // this console.log will never run

const circleArea = (radius) => {
    // throw an error if radius is negative, or radius is not a number
    if (radius <= 0) {
        throw new Error("Radius must be a positive number"); // if this executes, will exit out of the function
    }
    if (isNaN(radius)) {
        throw new Error("Radius must be a number"); // if this executes, will exit out of the function
    }
    return Math.PI * radius ** 2;
};

// console.log(circleArea(2));
// console.log(circleArea("hello"));
// console.log(circleArea(-2));

// This runs fine
// try {
//     const area = circleArea(2);
//     console.log(`The area is ${area}`);
// } catch (error) {
//     console.log(error.message);
// }

try {
    const area = circleArea("hello");
    console.log(`The area is ${area}`);
} catch (error) {
    console.log(error.message);
}
