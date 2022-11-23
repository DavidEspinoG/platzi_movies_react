import React from "react";
import { useState } from "react";

function useMovies(){
    const API_KEY =  '?api_key=bdaaaa2b20c386f0be9d20b50bd8dbe3';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const [ trendingMovies, setTrendingMovies ] = useState([])
    React.useEffect(() => {
        const getTrendingMovies = async () => {
            const endpoint = 'trending/movie/day'
            const res = await fetch(BASE_URL + endpoint + API_KEY)
            const data = await res.json()
            const movies = data.results;
            setTrendingMovies(movies)
        }
        getTrendingMovies()
            .catch(console.error)
    },[])
    console.log(trendingMovies)
    return { trendingMovies, setTrendingMovies }
}
export { useMovies }
