import React from "react";
import { MainTitle } from "../components/MainTitle";
import { TrendingMovies } from "../components/TrendingMovies";
import { MainContainer } from "../components/MainContainer";
import { LikedMovies } from "../components/LikedMovies";
import { useMovies } from "../hooks/useMovies";
import "./HomePage.css";
import img from "../img/background.jpeg"
function HomePage() {
    const { likedMovies } = useMovies();
    return (
        <MainContainer className="main-container">
            <MainTitle
                title='movieApp'
                img={img}
            />
            <TrendingMovies/>
            <LikedMovies
                movies={likedMovies}
            />

        </MainContainer>
    )
}
export { HomePage }