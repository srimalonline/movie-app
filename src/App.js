import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=c801b5d3";

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s={title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies("Spiderman");
    }, []);

    return (
        <div className="app">
            <h1>Movie Lanka</h1>
            <div className="search">
                <input
                    placeholder="Search from movies"
                    value="Superman"
                    onChange={() => { }}
                />
                <img src={SearchIcon} alt="search" onClick={() => { }} />
            </div>

            {movies?.length > 0 
                ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard moive={movie} />
                    ))}
                </div>
                ) : (
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
