import React from "react";
import { MainTitle } from "../components/MainTitle";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../components/MainContainer"; 
import { SecondaryContainer } from "../components/SecondaryContainer";
import { Button } from "../components/Button";
import styled from "styled-components";
const StyledP = styled.p`
    font-size: 2.3rem;
    text-align: justify;
    color: var(--white);
`
function MovieDetail() {
    const location = useLocation();
    const movie = location.state.movie
    return(
        <MainContainer>
            <MainTitle
                title={movie.title}
                img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
            <SecondaryContainer>
                <h2>{movie.title}</h2>
                <StyledP>{movie.overview}</StyledP>
                <StyledP>Release date: {movie.release_date}</StyledP>
                <Button to='/'>Back</Button>
            </SecondaryContainer>
        </MainContainer>
    )
}
export { MovieDetail }