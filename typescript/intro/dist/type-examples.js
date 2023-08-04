"use strict";
// we can use type to describe the share of objects
// define all the fields
// type Person = {
//     firstName: string;
//     lastName: string;
//     age: number;
// };
// we can implement interfaces in typescript just like in Java
//* manual field assignment
class Person {
    // these can be private if required. will prevent us from doing things like me.firstName
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getName() {
        return this.firstName;
    }
}
//* Shortcut field assignment
class Pet {
    constructor(name, animalType) {
        this.name = name;
        this.animalType = animalType;
    }
    getName() {
        return this.name;
    }
}
const me = new Person("Alex", "Baulderstone", 35);
const kin = new Pet("Kin", "Cat");
// const me: Person = {
//     firstName: "Alex",
//     lastName: "Baulderstone",
//     age: 35,
// };
const someone = {
    firstName: "Bob",
    lastName: "Smith",
    age: 45,
    location: "Sydney",
    getName() {
        return this.firstName;
    },
};
// functions that don't return a value, can use void
// const greet = (obj: Person): void => {
//     console.log("Hello " + obj.firstName);
// };
// const greet = (obj: Greetable): void => {
//     console.log("Hello " + obj.firstName);
// };
const greet = (obj) => {
    console.log("Hello " + obj.getName());
};
greet(me);
greet(someone); // this still works -> TS uses duck typing. the `someone` object, fulfills all the definitions of a person and adds an additional property
