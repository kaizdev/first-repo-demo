import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";
import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import { projects } from "./data";

function App() {
    return (
        <>
            <ProjectCardList projects={projects} />
        </>
    );
}
export default App;
