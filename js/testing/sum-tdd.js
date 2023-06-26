export const notANumberError = new Error(
    "one or more arguments was not a number"
);

export const noParamsError = new Error(
    "no parameters were passed to the function"
);

export const sum = (...theArgs) => {
    // check for empty parameters
    if (theArgs.length === 0) {
        throw noParamsError;
    }

    // check if any of the parameters is NaN
    if (theArgs.some(isNaN)) {
        throw notANumberError;
    }

    // Otherwise, sum any of the parameters together
    let total = 0;
    theArgs.forEach((num) => (total += num));

    return total;
};

// a function that calculates the sum of numbers

// it should throw an error if one or more parameters are not a number

// if no parameters are passed - throw and error

// i want it to sum any number of arguments >=1

// console.log(sum(0));
// console.log(sum());
// console.log(sum("hi"));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
