import ZeroDivisionError from "./zero-divide-error.js";

// function that divides two numbers
export const divide = (a, b) => {
    // throw an error when b is 0
    if (b === 0) {
        // throw an error
        // throw new Error("Cannot divide by zero") <- replaces this
        throw new ZeroDivisionError("Cannot divide by 0");
    }
    return a / b;
};
