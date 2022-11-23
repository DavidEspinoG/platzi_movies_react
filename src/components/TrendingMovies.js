import React from "react";
import { useState } from "react";
function TrendingMovies({BASE_URL, API_KEY}) {
    const [ trendingMovies, setTrendingMovies ] = useState([])
    React.useEffect(() => {
        const getTrendingMovies = async (BASE_URL, API_KEY) => {
            const endpoint = 'trending/movie/day'
            const res = await fetch(BASE_URL + endpoint + API_KEY)
            const data = await res.json()
            const movies = data.results;
            setTrendingMovies(movies)
        }
        getTrendingMovies(BASE_URL, API_KEY)
            .catch(console.error)
    },[])
  return (
    <p>Trending movies</p>
  )
}
export { TrendingMovies }