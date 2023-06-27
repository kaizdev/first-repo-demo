import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./ProjectCardList.module.scss";

const ProjectCardList = ({ projects }) => {
    return (
        <section className={style.list}>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    project={project}
                    // title={project.title}
                    // description={project.description}
                    // deployedLink={project.deployedLink}
                    // githubLink={project.githubLink}
                />
            ))}
        </section>
    );
};

export default ProjectCardList;
