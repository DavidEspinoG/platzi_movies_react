import React from "react";
import "./MoviesContainer.css"; 
import { useMovies } from "../hooks/useMovies"         
function MoviesContainer({ movies }){
    const { likeMovie, likedMovies } = useMovies();
    return (
        <div className="movies-container">
            {movies.map((movie) =>
            <div className="movie-container" key={movie.id} >
                <img 
                    
                    src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                    alt={movie.title}>
                </img>
                <button className="btnLike" onClick={() => 
                    {likeMovie(movie)
                    console.log(likedMovies)
                    }}
                ></button>
            </div>)}
        </div>
    )
}
export { MoviesContainer }