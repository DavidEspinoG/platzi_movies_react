import React, { useContext } from "react";
import { MainContainer } from "./MainContainer";
import { MainTitle } from "./MainTitle";
import { useParams } from "react-router-dom";
import { MovieContext } from "../hooks/MovieProvider";

function CategoryDetail(){
    const params = useParams();
    const { moviesByCategory } = useContext(MovieContext);
    let image = moviesByCategory[0]?.backdrop_path
    return(
        <MainContainer>
            <MainTitle
                title={params.category_name}
                img={`https://image.tmdb.org/t/p/original${image}` }
            />
        </MainContainer>
    )
}

export { CategoryDetail }