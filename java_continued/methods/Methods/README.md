# Methods

## What is a method?

-   It's a function attached to an object, or to a class
-   Sometimes use the internal state of an object (current value of the fields)
-   e.g. name was private, public methods that can access the internal state (getName(), )

## WHat kind of methods are there?

-   Static Methods - attached directly to a class definition (e.g. Math() methods are attached directly to a class definition)
-   Instance Methods (default) - if we don't specify that it is static. This is attached to an object (instance of a class)

## Why do we use methods?

-   To manipulate objects
-   To change internal state
-   Produce values based on internal state
-   Re-usability
-   DRY (don't repeat yourself)
-   Abstraction -> write something complex in one place, and then we can call that later on elsewhere (someone else could have written the abstraction). Sometimes just need to know _how_ to use it (rather than how it works)

## Scopes

-   public - can be used anywhere in the code base
-   protected - can be used anywhere in the same package
-   private - can only be used in the same class

## Syntax

[scope] [(optioinal) static] [return type] methodName([param type] paramName) {
//body
}

```java
    class MyClass {
        private int counter;

        public MyClass() {
            this.counter = 0;
        }

        public static void myStaticMethod {
            System.out.println("This is a static method");
        }

        public void myInstanceMethod() {
            System.out.println("This is an instance method");
            // we have access to the instance fields
            System.out.println(this.counter);
        }

        public void incrementCounter() {
            this.counter++;
        }
    }

    MyClass.myStaticMethod()

    //if we want to call instance, we need to create a "new" one

    MyClass class1 = new MyClass(); // instantiated with counter value at 0
    class1.incrementCounter(); // increase internal counter value to 1;
    class1.myInstanceMethod(); //calls that function

```
