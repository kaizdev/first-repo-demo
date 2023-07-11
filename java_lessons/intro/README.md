# Introduction

## Types

-   In Java (and other more staticly typed languages) we need to assign a type to a variable
-   In JavaScript, variables could be any type and that type could change

```js
let myVariable = "A String";
myVariable = 10;
myVariable = true;
```

-   In Java, we need to assign the type when we declare the variable. The type is **fixed**. We cannot change it
-   Different types take up different amounts of memory

```java
String myString = "hello"
int myNum = 10;
boolean myBool = true;

```

### Primitive Types

-   In JavaScript, we have 7 primitive types (string, number, boolean, undefined, null, BigInt, symbol)
-   In JavaScript, we can use methods on primitive types because of some magic. e.g.

```js
// this is kind of magic
"hello".split("");
```

-   In Java, the definition of primitive is more strict. Primitive types do not have methods attached.
-   Also, the primitive types in Java are different. String is not primitive in Java -> instead it is an array of characters
-   Java primitive types:
-   boolean
-   byte: a signed 8 bit integer, whole numbers between -128 and 127
-   short: signed 16 bit integer, whole numbers between -32,768 to 32,767
-   int: signed 32 bit integer, also the default value used most of the time. Covers numbers from -2,147,483,648 to 2,147,483,647
-   long: signed 64 bit integer, covers numbers -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
-   float: single precision 32 bit floating point number (accuracy up to 6 decimal places)
-   double: double precision 64 bit floating point number (approx 15 decimal places) -- default decimal
-   char: Represents a single unicode character, java uses UTF-16

### Strings

## Strings in Java are different

-   Strings are Objects
-   Strings are mutable

```java
String myName = "Kai";
myName += "Zhang"
```

-   We can also represent strings as arrays of characters

```java
// we have to assign the length of arrays
char[] myName = new Char[4]
// we might have to do each character assigned
myName[0] = 'A'
myName[1] = 'l'
myName[2] = 'e'
myName[3] = 'x'
```

### When to use String

-   Most of the time
-   Especially when readability is more important than performance
-   When the string length may change
-   When we want to use String methods

### When to use Char Array - char[]

-   memory critical applications, assigning exactly how much space
-   But we have to be careful with size. If we know for sure the length will never change, this might be a good option
