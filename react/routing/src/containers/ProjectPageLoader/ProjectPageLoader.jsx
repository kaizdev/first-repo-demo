import React from "react";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../services/project-services";
import LoadingSpinner from "../../components/LoadSpinner/LoadingSpinner";

const ProjectPageLoader = () => {
    // const params = useParams();
    // console.log(params);

    const { id } = useParams(); // destructure the id from the useParams

    const [project, setProject] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getProjectById(+id)
            .then((project) => setProject(project))
            .catch((err) => setError(err)) // need to convert to a number as useParams returns a string always
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            {/* {loading && <p>Loading</p>} */}
            {loading && <LoadingSpinner />}
            {!loading && project && <ProjectPage project={project} />}
            {!loading && error && <p>{error.message}</p>}
        </>
    );
};

export default ProjectPageLoader;

// As all the logic is here, instead of the ProjectPage, it makes testing of the ProjectPage easier
