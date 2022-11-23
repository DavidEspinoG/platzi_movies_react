import React from "react";
import { MainTitle } from "../components/MainTitle";
import { TrendingMovies } from "../components/TrendingMovies";
import "./HomePage.css";

function HomePage() {

    return (
        <main className="main-container">
            <MainTitle/>
            <TrendingMovies/>
        </main>
    )
}
export { HomePage }