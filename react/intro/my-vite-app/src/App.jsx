import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/Main";

const App = () => {
    console.log("App runs");
    // Any JS syntax is valid with the function
    return (
        <>
            <Header
                heading="My App"
                subheading="goodbye"
                fruit="banana"
                favNumber={10}
                isBig={true}
                // all properties passed to the Header component
            />
            <Main />
            <Footer />
        </>
    ); // return all as one expression. More strict within the return
    // we have to return a single element.. cannt have header and main at the same level. We need to add shard (empty tag)
};

export default App;
