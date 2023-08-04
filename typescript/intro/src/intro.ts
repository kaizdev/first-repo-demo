//let myName = "Alex"; // infer that it is a string because we've declared it as a string

let myName: string = "Alex"; // explicitly declare the type

//~ any
//let myName: any = "Alex" // any is usually a code smell

//myName = 22; // doesn't work as its a string.

// we cannot change type - compiler won't allow it
const add = (a: number, b: number): number => {
    return a + b;
};

// define what my function will return using the : number (before the arrow)

// replaces this type check (Without TS)
// const add = (a, b) => {
//     if (typeof a !== 'number') {
//         throw new Error("must be a number")
//     }
//     return a + b;
// };

// add("hello", "goodbye"); // doesn't work
let result = add(1, 2);

function subtract(a: number, b: number): number {
    return a - b;
}

subtract(2, 1);

// In Java:
const names: string[] = ["Alice", "Bob", "Charlie"];
// we can't push a number into a string[]
// names.push(10); // doesn't work, and also won't compile

// TypeScript has support for generics
// Let's say we only want it to work if the arrays are of the same type
const combineArrays = <T>(arr1: T[], arr2: T[]) => {
    return [...arr1, ...arr2];
};

//combineArrays([1, 2, 3, 4], ["a", "b"]); // Inferred from the first array - doesn't work

//explicit combineArrays<number>

combineArrays<boolean>([true, false], [false, true]); // explicit
combineArrays(["a,b"], ["c,d"]); // inference
