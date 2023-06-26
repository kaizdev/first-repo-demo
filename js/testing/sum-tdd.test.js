import { sum } from "./sum-tdd.js";

import { notANumberError, noParamsError } from "./sum-tdd.js";

describe("Test cases for a sum of numbers function, which takes at least one number parameter and sums it", () => {
    test("should throw an error if one ore more parameters are not a number", () => {
        expect(() => {
            sum("hi", "hello").toThrow(notANumberError);
        });
        expect(() => {
            sum("foo", 2).toThrow(notANumberError);
        });
        expect(() => {
            sum(3, false).toThrow(notANumberError);
        });
        expect(() => {
            sum(undefined, 3).toThrow(notANumberError);
        });
    });

    test("should throw an error if no parameters are passed", () => {
        expect(() => {
            sum().toThrow(noParamsError);
        });
    });

    test("should sum any number of arguments greater than or equal to 1", () => {
        expect(sum(1)).toBe(1);
        expect(sum(2, 4)).toBe(6);
        expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
    });
});
