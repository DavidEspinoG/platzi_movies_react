import React from "react";
import {  useNavigate } from "react-router-dom";
import "./MoviesContainer.css"; 
import { useContext } from "react";
import { MovieContext } from "../hooks/MovieProvider";  
function MoviesContainer({ movies }){
    const navigate = useNavigate();
    const { likeMovie, likedMovies} = useContext(MovieContext);
    return (
        <div className="movies-container">
            {movies.map((movie) =>
                    <div 
                        className="movie-container" 
                        key={movie.id} 
                        >
                        <img 
                            onClick={() => {
                                navigate('/detail', {state: {movie: movie}})
                            }}
                            src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                            alt={movie.title}>
                        </img>
                        <button
                        className={`btnLike${likedMovies.findIndex((element) => 
                            element.id === movie.id) !== -1 ? ' btnLiked' : '' }`}
                        onClick={() => 
                            {
                            likeMovie(movie)
                            navigate('/');
                            }}
                        ></button>
                    </div>
                )}
        </div>
    )
}
export { MoviesContainer }