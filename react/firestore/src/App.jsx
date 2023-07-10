import { useEffect, useState } from "react";
import { getAllMovies } from "./services/movies-service";

import "./App.css";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import LiveMovieList from "./components/MovieList/LiveMovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./components/MoviePage/MoviePage";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies()
            .then((movieData) => setMovies(movieData))
            .catch((err) => console.log(err));
    }, []);

    // const updateMovieList = (newMovie) => {
    //     setMovies([...movies, newMovie]);
    // };
    return (
        <>
            <h1>Firestore</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/movies" element={<LiveMovieList />} />
                    <Route path="/movies/new" element={<NewMovieForm />} />
                    <Route path="/movies/:id" element={<MoviePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
