import React from "react";
import { SecondaryContainer } from "./SecondaryContainer";
import { MoviesContainer } from "./MoviesContainer";

function LikedMovies({movies}){
    return (
        <SecondaryContainer>
            <h2>Liked Movies</h2>
            <MoviesContainer
                movies={movies}
            />
        </SecondaryContainer>
    )
} 

export { LikedMovies }