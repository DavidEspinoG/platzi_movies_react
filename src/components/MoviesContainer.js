import React from "react";
import "./MoviesContainer.css"; 
import { useMovies } from "../hooks/useMovies";         
function MoviesContainer({ movies }){
    const { likeMovie, likedMoviesIds } = useMovies();
    
    return (
        <div className="movies-container">
            {movies.map((movie) =>

            <div className="movie-container" key={movie.id} >
                <img 
                    
                    src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                    alt={movie.title}>
                </img>
                <button className={`btnLike${likedMoviesIds.indexOf(movie.id) !== -1 ? ' btnLiked' : '' }`} onClick={() => 
                    {
                    likeMovie(movie)
                    }}
                ></button>
            </div>)}
        </div>
    )
}
export { MoviesContainer }