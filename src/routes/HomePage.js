import React from "react";
import { MainTitle } from "../components/MainTitle";
import { TrendingMovies } from "../components/TrendingMovies";
import { MainContainer } from "../components/MainContainer";
import "./HomePage.css";
import img from "../img/background.jpeg"
function HomePage() {
    return (
        <MainContainer className="main-container">
            <MainTitle
                title='movieApp'
                img={img}
            />
            <TrendingMovies/>
        </MainContainer>
    )
}
export { HomePage }