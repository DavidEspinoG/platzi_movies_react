import React from "react";
import { useContext } from "react";
import { MainTitle } from "../components/MainTitle";
import { TrendingMovies } from "../components/TrendingMovies";
import { MainContainer } from "../components/MainContainer";
import { LikedMovies } from "../components/LikedMovies";
import { MovieContext } from "../hooks/MovieProvider";
import "./HomePage.css";
import img from "../img/background.jpeg";
import { Search } from "../components/Search";
import { Categories } from "../components/Categories";
function HomePage() {
    const { likedMovies } = useContext(MovieContext);
    return (
        <MainContainer className="main-container">
            <MainTitle
                title='movieApp'
                img={img}
            />
            <Search/>
            <TrendingMovies/>
            <LikedMovies
                movies={likedMovies}
            />
            <Categories/>
        </MainContainer>
    )
}
export { HomePage }