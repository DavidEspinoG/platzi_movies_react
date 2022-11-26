import React from "react";
import { SecondaryContainer } from "./SecondaryContainer";
import { MoviesContainer } from "./MoviesContainer";

function LikedMovies({movies}){
    return (
        <SecondaryContainer>
            {movies.length > 0 && <h2>Liked Movies</h2>}
            
            <MoviesContainer
                movies={movies}
            />
        </SecondaryContainer>
    )
} 

export { LikedMovies }