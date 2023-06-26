// 1. Given 2 valid numbers, it returns the area, it returns the area of the rectangle

// 2. What could do wrong?
// what edge cases should we cover?

// Invalid parameters
// if 0 or less, throw an error

// We need to make sure that both width and height are a type number, if string/boolean, thrown an Error

// Throw an error if only one parameter passed

export const rectangleArea = (height, width) => {
    // the order of the operations is important here as it impacts the test

    if (height === undefined || width === undefined) {
        throw new Error("one or more parameters are missing");
    }
    if (isNaN(height) || isNaN(width)) {
        throw new Error("width or height must be numbers");
    }

    if (height <= 0 || width <= 0) {
        throw new Error(
            "height and width must be a positive number greater than 0"
        );
    }
    return height * width;
};
