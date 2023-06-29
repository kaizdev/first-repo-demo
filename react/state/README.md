# State

## What is state?

### In the real world?

-   Properties of an object that reflect what it's doing "state of being"
-   example of H20 - water, ice, steam (state is changed by some external force)

### In React

-   A kind of variable that exists within a component
    -   Determines behaviour / rendering
    -   Changed by user iteraction

## State vs Props

### Props

-   passed in by parent component
-   immutable -> once props are passed they can't change
-   A change in props causes a re-render

### State

-   Exists within a component
-   Can be changed
-   A change in state will cause the component to re-render

These are the only 2 ways to cause elements to re-render
