# Testing

## Why do we test code?

-   Check for bugs, make sure nothing is breaking or being weird
-   Make it ready for production, ready to be used by a user
-   Confirm / validate our expectations or understanding of what the code does
-   Provides certainty that code will do what it is supposed to do
-   Testing is also documentation - what things are supposed to do, the intentions behind what we're trying to achieve
-   Testing provides safety for making changes (check that the new code doesn't break existing code)
    -   Continuous Integration / Continuous Delivery (CI/CD) -> part of agile, modern software practices. Any time changing main repo -> pull request will fail if the automatic tests fail

## How do we test in React?

### End to End options (not touching this now)

-   Cypress -> automate browser to run the tests, forms, links, error messages etc. Can also provide video of failing areas
-   Playwright -> will be using this in the client project
-   Selenium -> kind of falling out of fashion, however big for pure testing roles. e.g. just to test software, often written in Java

### Component Testing

-   Testing Library (React) -> what we'll use for testing
    -   Gotcha: v12 and v13 major changes -> make sure documentation is on v13
-   Note: Enzyme used to be popular, but is now deprecated and no longer used (doesn't support React 18)

## What do we test?

-   Does it render?
-   Does it render the correct things?
-   Does it do what it is supposed to do?
-   Does it respond to user actions? eg forms submitted, buttons clicked
-
