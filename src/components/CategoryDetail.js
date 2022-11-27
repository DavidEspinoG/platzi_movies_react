import React, { useContext } from "react";
import { MainContainer } from "./MainContainer";
import { MainTitle } from "./MainTitle";
import { useLocation } from "react-router-dom";
import { MovieContext } from "../hooks/MovieProvider";

function CategoryDetail(){
    const location = useLocation();
    const {  moviesByCategory } = useContext(MovieContext);
    React.useEffect(() => {
        console.log(location)
    })
    return(
        <MainContainer>
            <MainTitle
                title='test'
                img={`https://image.tmdb.org/t/p/original${moviesByCategory[0].backdrop_path}` || null}
            />
        </MainContainer>
    )
}

export { CategoryDetail }