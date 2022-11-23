import React from "react";
import { MainTitle } from "../components/MainTitle";
import { TrendingMovies } from "../components/TrendingMovies";
import "./HomePage.css";

function HomePage({BASE_URL, API_KEY}) {

    return (
        <main className="main-container">
            <MainTitle/>
            <TrendingMovies
                BASE_URL={BASE_URL}
                API_KEY={API_KEY}
            />
        </main>
    )
}
export { HomePage }