# Abstract Classes

## What are abstract classes?

-   a blueprint of a class

    -   what a class should do
    -   what properties it should have
    -   methods with implementation

-   we cannot instantiate an abstract class.
-   won't be able to have:

```java
Account account = new Account()
```

We can have:

```java
SavingAccount savingAccuont = new SavingAccount();
```

### Challenge

### Challenge: How many granules?

1 Teaspoon of coffee granules is needed for 150mL of water
Create an abstract Container with 2 functions

-   An abstract function getVolume()
-   A teaspoonCount() function that uses getVolume() to calculate the teaspoons of coffee granules needed for the volume
    Create three classes LatteGlass, ShotGlass and Mug that extend container, all should implement the getVolume() method

### Challenge: Phone

Create an abstract class named Phone

-   the Phone class should have a phone number property
-   the Phone class should have a method named call that takes a single parameter of another phone object and logs that phones number
-   create a class named Landline that inherits from Phone and has an address property
-   create a class named Mobile that inherits from Phone and has a method called text that takes another Mobile as well as a string and logs the number as well as the message
