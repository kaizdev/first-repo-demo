//^ Scope - where can i access my variables from?

// global scope
const MY_NAME = "Kai";
console.log(MY_NAME);

if (MY_NAME.length > 10) {
    console.log(`${MY_NAME} is longer than 10 letters`);
} else {
    //can access the global scope
    console.log(`${MY_NAME} is less or equal to 10 letters`);
}

function printMyName() {
    // can access the global here too
    console.log(MY_NAME);
}

printMyName();

if (true) {
    // thing only exists in the scope of this IF block. I cannot access it from global scope
    let thing = "Variable from block scope";
    console.log(thing);
}

// console.log(thing); //cant access it
// // reference error - thing is not defined

// function printThing() {
//     console.log(thing);
// }
// reference error - thing is not defined

const firstName = "Kai"; // <- this is a globally scoped - different from the parameter below which is local

function getFullName(firstName, lastName) {
    // this is locally scoped - local variable
    return firstName + " " + lastName;
}

console.log(getFullName("kai", "zhang"));

console.log("-------");

const myGlobalVar = "Global String";

const scope1 = (scope1param) => {
    console.log(myGlobalVar, "scope1");
    console.log(scope1param, "scope 1 param from scope 1");
    // can't access scope2param from scope1

    const scope2 = (scope2param) => {
        const scope2Var = "I was created in scope 2";
        console.log(myGlobalVar, "global var logged from scope 2");
        console.log(scope1param, "scope 1 param from scope 2");
        console.log(scope2param, "scope 2 param from scope 2");
        console.log(
            scope2Var,
            "variable created in scope 2, accessed from scope 2"
        );

        const scope3 = (scope3param) => {
            const scope3Var = "I was created in scope 3";
            console.log(myGlobalVar, "global var logged from scope 3");
            console.log(scope1param, "scope 1 param from scope 3");
            console.log(scope2param, "scope 2 param from scope 3");
            console.log(
                scope2Var,
                "variable created in scope 2, accessed from scope 3"
            );
            console.log(
                scope3Var,
                "variable created in scope 3, accessed in scope 3"
            );
            console.log(scope3param, "scope 3 param from scope 3");
        };
        scope3("arg for scope 3");
    };
    scope2("arg for scope 2");
};

scope1("arg for scope1");

function functionOne(funcOneParam) {
    return funcOneParam;
}

function functionTwo(funcTwoParam) {
    console.log(funcOneParam); // function 2 cannot access function one because they are on the same level (not inside out). If functionTwo was called, it would cause an error
    return funcTwoParam;
}

//! Why avoid VAR?

if (true) {
    const y = 20;
}

console.log(y); //error block scope using const

if (true) {
    var x = 20;
}

console.log(x); // var lets you see the variable but might cause unintentional issues.

var z = 40;
console.log(z); // 40

var z = 50;
console.log(z); // 50
