import "./App.css";
import Card from "./components/Card";

function App() {
    // const [count, setCount] = useState<number>(0); // explicitly telling this to be a <number>

    return (
        <>
            <Card heading="this is a new heading" content="some content" />
        </>
    );
}

export default App;
