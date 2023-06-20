// customer error

// we will explore this a lot more in java - classes
// the TypeError is like a child of a generic Error
// extends makes a new Error - inherit the behaviour and properties of 'Error'
class ZeroDivisionError extends Error {
    // create a constructor - special function/method used to create a new object
    constructor(message) {
        super(message); // super -> calls the constructor of the parent ('Error').
    }
}

export default ZeroDivisionError;
