import React, { useContext } from "react";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import { MainTitle } from "./MainTitle";
import { useParams } from "react-router-dom";
import { MovieContext } from "../hooks/MovieProvider";
import { Button } from "../components/Button";
import { MoviesContainer } from "./MoviesContainer";
function CategoryDetail(){
    const params = useParams();
    const { moviesByCategory } = useContext(MovieContext);
    const image = moviesByCategory[1]?.backdrop_path
    return(
        <MainContainer>
            <MainTitle
                title={params.category_name}
                img={`https://image.tmdb.org/t/p/original${image}`}
            />
            <SecondaryContainer>
                <h2>{params.category_name} Movies</h2>
                <MoviesContainer
                    movies={moviesByCategory}
                />
                <Button to='/'>Back</Button>
            </SecondaryContainer>
            
        </MainContainer>
    )
}

export { CategoryDetail }