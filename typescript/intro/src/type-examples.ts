// we can use type to describe the share of objects
// define all the fields
// type Person = {
//     firstName: string;
//     lastName: string;
//     age: number;
// };

// we can also use interfaces in TypeScript
// interfaces are different to Java, they can have properties
interface Greetable {
    // firstName: string;
    getName(): string;
}

// we can implement interfaces in typescript just like in Java

//* manual field assignment
class Person implements Greetable {
    firstName: string;
    lastName: string;
    age: number;
    // these can be private if required. will prevent us from doing things like me.firstName

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getName(): string {
        return this.firstName;
    }
}

//* Shortcut field assignment
class Pet implements Greetable {
    constructor(private name: string, public animalType: string) {}
    getName(): string {
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

const greet = (obj: Greetable): void => {
    console.log("Hello " + obj.getName());
};

greet(me);
greet(someone); // this still works -> TS uses duck typing. the `someone` object, fulfills all the definitions of a person and adds an additional property
greet(kin);
