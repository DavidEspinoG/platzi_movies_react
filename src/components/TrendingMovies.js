import React from "react";
import { useState } from "react";
function TrendingMovies({url, apiKey}) {
    const [ trendingMovies, setTrendingMovies ] = useState([])
    React.useEffect(() => {
        const getTrendingMovies = async (url, apiKey) => {
            const endpoint = 'trending/movie/day'
            const res = await fetch(url + endpoint + apiKey)
            const data = await res.json()
            const movies = data.results;
            setTrendingMovies(movies)
        }
        getTrendingMovies(url, apiKey)
            .catch(console.error)
    },[])
  return trendingMovies.map((movie) => <p>{movie.title}</p>)
}
export { TrendingMovies }