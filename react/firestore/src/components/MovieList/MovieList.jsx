import MovieCard from "../MovieCard/MovieCard";
import style from "./MovieList.module.scss";

const MovieList = ({ movies }) => {
    return (
        <section className={style.list}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
    );
};

export default MovieList;
