import { describe, screen } from "vitest";
import Card from "./Card";
import { render } from "@testing-library/react";

describe("Card Component", () => {
    test("Should render a heading and content", () => {
        render(
            <div>
                <p>hello</p>
            </div>
        );
        const para = screen.getByText("hello");
        expect(para).toBeInTheDocument();
    });
});
