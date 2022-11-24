import React from "react";
import { MainTitle } from "../components/MainTitle";
import { TrendingMovies } from "../components/TrendingMovies";
import "./HomePage.css";
import img from "../img/background.jpeg"
function HomePage() {
    return (
        <main className="main-container">
            <MainTitle
                title='movieApp'
                img={img}
            />
            <TrendingMovies/>
        </main>
    )
}
export { HomePage }