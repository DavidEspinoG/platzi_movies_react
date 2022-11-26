import React from "react";
import { useContext } from "react";
import { MoviesContainer } from "./MoviesContainer";
import { MovieContext } from "../hooks/MovieProvider";
function TrendingMovies() {
  const { trendingMovies } = useContext(MovieContext);
  return (
    <section className="secondary-container">
      <h2>Trending Movies</h2>
      <MoviesContainer
        movies={trendingMovies}
      />
    </section>
  )
}
export { TrendingMovies }