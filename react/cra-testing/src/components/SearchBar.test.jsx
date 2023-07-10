import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
    it("Should call the submit function when search button is clicked", async () => {
        const myFunction = jest.fn(() => {
            console.log("Search happens");
        });
        render(<SearchBar formSubmit={myFunction} />);
        const searchBtn = screen.getByRole("button");
        const user = userEvent.setup();
        await user.click(searchBtn);
        expect(myFunction).toHaveBeenCalled();
    });

    it("Should clear its value after search button is clicked", async () => {
        const myFunction = () => console.log("searched for: " + value);
        render(<SearchBar formSubmit={myFunction} />);
        const searchBtn = screen.getByRole("button");
        const input = screen.getAllByPlaceholderText(/search/i);
        const user = userEvent.setup();
        await user.type(input, "hello");
        expect(input.value).toBe("hello");
        await user.click(searchBtn);
        expect(input.value).toBe("");
    });
});
