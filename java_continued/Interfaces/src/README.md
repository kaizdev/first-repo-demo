# Interfaces

## What are interfaces?

-   A way of describing the behaviour of a class - what methods it should have
-   A contract that a class must fulfill
-   A way to force a class to prove method implementations
-   Instructions on what a class should do

-   put a bunch of method signatures without implementation -> this creates a todo list
-   we just list all the methods, but leave out the implementations
-   whereas in inheritance, we provide both the method and the implementation
-   the class is the implementation of the interface

## Naming conventions for interfaces

-   ISomething
-   Something-able
-   MakesSound, DoesSomething

## How to create interface

-   New > Interface
-   or update Class to Interface

## Why should we use interfaces?

-   So our team can understand the code requirement better
-   They allow us to use the concept of polymorphism

-   We cannot instantiate a new interface
    e.g. MakesSound makesound = new MakesSound
