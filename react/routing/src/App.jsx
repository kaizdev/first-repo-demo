import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { getAllProjects } from "./services/project-services";
import { useState, useEffect } from "react";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectPageLoader from "./containers/ProjectPageLoader/ProjectPageLoader";

function App() {
    // we moved this from ProjectList (now App's responsibility and now pass it down via prop)
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getAllProjects().then((data) => setProjects(data));
    }, []);
    // Note that when we are no longer on the ProjectsPage, this unmounts.

    return (
        <>
            <BrowserRouter>
                {/* Within BrowserRouter - Show everywhere on every page e.g. header, footer*/}
                <NavBar></NavBar>

                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route
                        path="/projects"
                        element={<ProjectsPage projects={projects} />}
                    />
                    <Route
                        path="projects/:id"
                        element={<ProjectPageLoader />}
                    />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                {/* <footer>My Footer</footer> */}
            </BrowserRouter>
        </>
    );
}

export default App;
