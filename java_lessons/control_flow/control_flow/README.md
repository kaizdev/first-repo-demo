# Control Flow

Syntatically control flow in Java is **Very** similar to JavaScript

-   If statements
-   For loops
-   Switch statements
    ALl look the same, and have similar behaviour

## Differences

-   Java does not have truthy and falsy values like JavaScript
    e.g. in JAvaScript we can have if statements taht coerce into a boolean

```js
let name = "Alex";
if (name) {
    console.log("Hello" + name);
}
```

**This will not work in Java**

-   all we can check in the condition are expressioins which result in a boolean

```java

String name = "Alex";
if (name != null && name.length() > 0) {
    System.out.println("Hello " + name);
}

```

However, if the value is already a boolean, we can use it in Java
boolean isCitizen = true
if (isCitizen) {
this is ok
}

Java also doesn't do lazy evaluation / short circuit logic

-   In JavaScript we can do things like:

```js
console.log(`Hello ${name || "guest"}`);
// default to guest if name does not exist
```

In Java we'd have to write

```java
  String name = null;
  if(name == null) {
    System.out.println("Hello guest");
  } else {
    System.out.println("Hello " + name);
  }
```
