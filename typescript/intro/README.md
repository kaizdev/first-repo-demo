# TypeScript

## What is TypeScript?

-   JavaScript with types
-   Superset of JavaScript -> all JavaScript is valid TypeScript and TS is on-top (e.g. css works in scss)
    -   It means you can slowly add more type safety (over time) without breaking original code
-   It is a compilation tool
    -   For now there are very limited choices for running TypeScript files natively
    -   doesn't run in the browser or in the node
    -   TypeScript files are turned into JavaScript files -> if we have type errors the compilation won't happen

## Why do we use TypeScript?

-   It prevents us from making dumb mistakes
-   It (sometimes) moves the mistake from happening in run time to happening in compile / coding time
-   It helps teams communicate
    -   We can use types to communicate things like the props a component should take
    -   What an API response should look like
    -   What a DTO should look like etc

## What are the downsides?

-   It's generally slower (to write code) and we write more boilerplate
-   We can over abstract too early
-   There is no performance benefit at this stage (TS is turned into JS with compilation)
-   Sometimes things are weird - we write weird / confusing code to satisfy typescript
