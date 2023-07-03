import React from "react";
import { Link } from "react-router-dom";
import style from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
    const { id, title, description, deployedLink, githubLink, techStack } =
        project;

    return (
        <article className={style.card}>
            <h3>{title}</h3>
            <img
                className={style.img}
                src="http://placekitten.com/250/250"
                alt="kitten"
            />
            <Link to={`${id}`}>See More</Link>
            {/* <p>{description}</p>
            {deployedLink && <Link to={deployedLink}>Deployed</Link>}
            <Link to={githubLink}>Github</Link>
            <ul>
                {techStack.map((tech, i) => {
                    <li key={i}>{tech}</li>;
                })}
            </ul> */}
        </article>
    );
};

export default ProjectCard;
