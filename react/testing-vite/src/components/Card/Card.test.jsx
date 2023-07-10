import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

describe("Card Component", () => {
    it("Should render a heading from props", () => {
        render(<Card heading="Hello world" content="test" />);
        const heading = screen.getByText(/hello world/i);
        expect(heading).toBeInTheDocument();
    });

    it("Should render a button", () => {
        render(<Card heading="Hello world" content="test" />);
        const btn = screen.getByRole("button");

        expect(btn).toBeInTheDocument();
    });

    it('Should render "show" button text when content is hidden', () => {
        render(<Card heading="Hello world" content="test" />);
        const btn = screen.getByRole("button");
        expect(btn).toHaveTextContent(/show/i);
    });

    it("To hide content by default", () => {
        render(<Card heading="Hello world" content="test" />);
        const content = screen.queryByText(/test/i);
        expect(content).not.toBeInTheDocument();
    });

    it("Should toggle the content on button click", async () => {
        render(<Card heading="Hello world" content="test" />);
        const btn = screen.getByRole("button");
        const user = userEvent.setup();
        // console.log('BEFORE CLICK');
        // screen.debug();
        await user.click(btn);
        // console.log('AFTER CLICK');
        // screen.debug();
        const content = screen.getByText(/test/i);
        expect(content).toBeInTheDocument();
        await user.click(btn);
        expect(content).not.toBeInTheDocument();
    });

    it("Should update the button text after click", async () => {
        render(<Card heading="Hello world" content="test" />);
        const user = userEvent.setup();
        const btn = screen.getByRole("button");
        expect(btn).toHaveTextContent(/show/i);
        await user.click(btn);
        expect(btn).toHaveTextContent(/hide/i);
    });
});
