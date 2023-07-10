import React from "react";
import style from "./MovieCard.module.scss";
import { Link } from "react-router-dom";
import { deleteMovieById } from "../../services/movies-service";

const MovieCard = ({ movie }) => {
    const { title, year, image, director, id } = movie;

    const onDeleteClick = (e) => {
        const confirmed = confirm(
            "You sure you want to delete movie with id " + id
        );
        if (confirmed) {
            deleteMovieById(id);
        }
    };

    return (
        <div className={style.card}>
            <h3>{title}</h3>
            <img
                className={style.card_image}
                src={image}
                alt={title + " poster"}
            />
            <Link className={style.card_link} to={id}>
                See More
            </Link>
            <button onClick={onDeleteClick} className={style.delete_button}>
                Delete Movie
            </button>
        </div>
    );
};

export default MovieCard;
