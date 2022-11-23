import React from "react";
import "./MoviesContainer.css";           
function MoviesContainer({ movies }){
    return (
        <div className="movies-container">
            {movies.map((movie) =>
            <div className="movie-container">
                <img 
                    key={movie.id} 
                    src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                    alt={movie.title}>
                </img>
            </div>)}
        </div>
    )
}
export { MoviesContainer }