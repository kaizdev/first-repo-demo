import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectById } from "../../services/project-services";

const ProjectPage = ({ project }) => {
    // // const params = useParams();
    // // console.log(params);

    // const { id } = useParams(); // destructure the id from the useParams

    // const [project, setProject] = useState(null);

    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     setLoading(true);
    //     getProjectById(+id)
    //         .then((project) => setProject(project))
    //         .catch((err) => setError(err)) // need to convert to a number as useParams returns a string always
    //         .finally(() => setLoading(false));
    // }, [id]);
    const { title, description, techStack, githubLink, deployedLink } = project;
    return (
        <>
            <section>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                    {techStack.map((tech, i) => {
                        return <li key={i}>{tech}</li>;
                    })}
                </ul>
                <Link to={githubLink}>Github</Link>
                <br />
                {deployedLink && <Link to={deployedLink}>Deployed</Link>}
                <br />
                <Link to="/projects">Back</Link>
            </section>
        </>
    );
};

export default ProjectPage;
