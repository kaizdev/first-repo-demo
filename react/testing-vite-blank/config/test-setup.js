import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// add all the react specific jest dom matchers to vitest
expect.extend(matchers);

// once the test is finished - unmount everything rendered to the dom
afterEach(() => {
    cleanup();
});
