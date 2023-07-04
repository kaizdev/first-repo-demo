import ContactPage from "./pages/ContactPage/ContactPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import DarkModeContextProvider from "./context/DarkModeContextProvider";

function App() {
    return (
        // Every component inside this provider, has access to this darkMode value - instead of props
        // we are providing the state of darkMode to the context provider
        <DarkModeContextProvider>
            <Wrapper>
                <ContactPage />
                <AboutMe />
                <Footer />
            </Wrapper>
        </DarkModeContextProvider>
    );
}

export default App;
