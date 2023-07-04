import style from "./ProjectList.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import LoadingSpinner from "../../components/LoadSpinner/LoadingSpinner";

// const ProjectList = () => {
//     return <section>{projects.map}</section>;
// };

const ProjectList = ({ projects }) => {
    // // This is saying when the projectlist component renders, first set useState to empty array.
    // // Then we fetch the data.
    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     getAllProjects().then((data) => setProjects(data));
    // }, []);
    // // Note that when we are no longer on the ProjectsPage, this unmounts.

    return (
        <>
            {projects.length > 0 ? (
                <section className={style.list}>
                    {projects.map((project, i) => {
                        return <ProjectCard key={i} project={project} />;
                    })}
                </section>
            ) : (
                <LoadingSpinner />
            )}
        </>
    );
};

export default ProjectList;
