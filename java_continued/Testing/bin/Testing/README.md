# Testing

## Why should we test our code?

-   make sure there is no bugs, and everything works correctly
-   We make a change, and we're comfortable that program continues to operate as intended (safety net)
-   Will know what is broken, what to fix
-   Documentation -> good tests tell us what the expected outcome is
    -   documents the main functions, edge cases and how program implements the functions
-   Forces us to write better / more modular code
-   Looks good when applying for jobs (makes you stand out)

## Testing in Java

-   JUnit5
-   make sure the code is the version 5 version. JUnit 4 has many differences with v5

## Syntax

Just add Test at the end of the Class Name

1. call it ClassTest
2. Add @Test
3. public void (no return).
4. Name of the method we're testing.
5. Test State (what params, objects we're using)
6. ExpectedOutcome()

The method name serves as the description

```java
class MyClassTest {
    @Test
    public void testedMethodName_TestState_ExpectedOutcome()
    // 1. Set up - arranging data
    // 2. Act - call the method that we're testing
    // 3. Assert - make an assertion about the result


}
class BookTest {
    @Test
    public void
}
etc.
```

-   build path > configure build path > libraries > classpath > select add library > JUnit
