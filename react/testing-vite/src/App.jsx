import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import "./App.css";
import Card from "./components/Card/Card";

function App() {
    return (
        <>
            <Card />
        </>
    );
}

export default App;
