//let myName = "Alex"; // infer that it is a string because we've declared it as a string
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myName = "Alex"; // explicitly declare the type
//~ any
//let myName: any = "Alex" // any is usually a code smell
//myName = 22; // doesn't work as its a string.
// we cannot change type - compiler won't allow it
var add = function (a, b) {
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
var result = add(1, 2);
function subtract(a, b) {
    return a - b;
}
subtract(2, 1);
// In Java:
var names = ["Alice", "Bob", "Charlie"];
// we can't push a number into a string[]
// names.push(10); // doesn't work, and also won't compile
// TypeScript has support for generics
// Let's say we only want it to work if the arrays are of the same type
var combineArrays = function (arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
};
//combineArrays([1, 2, 3, 4], ["a", "b"]); // Inferred from the first array - doesn't work
//explicit combineArrays<number>
combineArrays([true, false], [false, true]); // explicit
combineArrays(["a,b"], ["c,d"]); // inference
