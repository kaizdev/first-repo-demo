# Arrays

-   A way of storing multiple values sequentially that we can access by index
-   Zero indexed

## Arrays in Java

-   Must be a single type
-   We cannot have different data types in the same array
    ["Hello", 12, true]
-   In Java, we need to do arrays:

```java
int[] mytIntArray
String[] myStringArray
boolean[] myBooleanArray
```

-   Arrays in Java are fixed length, we don't have push, pop, etc.
-   Both of these limitations seem annoying
-   But they allow the compiler to optimise memory usage and go faster
-   We use braces for arrays in Java

### Creating Arrays

-   With array literals

```java
String name = "Alice";
String[] names = {"Alice", "Bob", "Charlie"}

```

-   Empty array with size

```java
int[] numbers = new int[3];
numbers[0] = 2;
numbers[1] = 4;
numbers[2] = 6;
```
