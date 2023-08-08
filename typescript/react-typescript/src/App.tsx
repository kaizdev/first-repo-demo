import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
    // const [count, setCount] = useState<number>(0); // explicitly telling this to be a <number>

    return (
        <>
            <Card content="hello world" heading="this is a good heading" />
        </>
    );
}

export default App;
