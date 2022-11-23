import React from "react";
import { MoviesContainer } from "./MoviesContainer";
import { useMovies } from "../hooks/useMovies";
function TrendingMovies() {
  const { trendingMovies } = useMovies();
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