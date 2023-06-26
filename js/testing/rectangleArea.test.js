import { rectangleArea } from "./rectangleArea.js";

const negativeOrZeroErrorError = new Error(
    "height and width must be a positive number greater than 0"
);
const paramsMustBeNumbersError = new Error("height and width must be numbers");

const paramsMissingError = new Error("one or more parameters are missing");

describe("Tests cases for a rectangle area function", () => {
    test("should calculate the area of a rectangle if given two positive numbers", () => {
        expect(rectangleArea(2, 3)).toBe(6);
        expect(rectangleArea(100, 120)).toBe(12000);
        expect(rectangleArea(2.1, 1.2)).toBe(2.52);
        expect(rectangleArea(1, 2)).toBe(2);
    });

    test("should throw an error if height or width are 0 or a negative number", () => {
        expect(() => {
            rectangleArea(-2, -6).toThrow(negativeOrZeroError);
        });
        expect(() => {
            rectangleArea(-8, 4).toThrow(negativeOrZeroError);
        });
        expect(() => {
            rectangleArea(0, 6).toThrow(negativeOrZeroError);
        });
        expect(() => {
            rectangleArea(0, 0).toThrow(negativeOrZeroError);
        });
    });

    test("should throw an error if one or more arguments are not numbers ", () => {
        expect(() => {
            rectangleArea("hi", "hello").toThrow(paramsMustBeNumbersError);
        });
        expect(() => {
            rectangleArea("apple", 0).toThrow(paramsMustBeNumbersError);
        });
        expect(() => {
            rectangleArea(true, [1, 2]).toThrow(paramsMissingError);
        });
    });

    test("should throw an error if one or more arguments are missing/undefined", () => {
        expect(() => {
            rectangleArea(undefined, 2).toThrow(paramsMissingError);
        });
        expect(() => {
            rectangleArea(1).toThrow(paramsMissingError);
        });
        expect(() => {
            rectangleArea().toThrow(paramsMissingError);
        });
    });
});

//! toThrow must be placed inside a function or it will not work correctly

// parameter inside toThrow is optional (if we want to be specific on the type of error)

// todo: matchers (functions) that compare things when comparing non-primitive data types (arrays, objects)
