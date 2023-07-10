import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import JokesList from "./JokesList";

describe("JokeList", () => {
    it("Should have a heading with the right number of jokes", () => {
        const fakeJokes = [
            { id: 1, joke: "Joke 1" },
            { id: 2, joke: "Joke 2" },
        ];
        render(<JokesList jokes={fakeJokes} />);
        const jokeHeading = screen.getByText(/found/i);
        expect(jokeHeading).toHaveTextContent("Found 2 jokes");
    });
});
