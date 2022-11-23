import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
function useMovies(){
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY =  '?api_key=bdaaaa2b20c386f0be9d20b50bd8dbe3';
    const { getLikedMovies, updateLikedMovies } = useLocalStorage();
    const [ trendingMovies, setTrendingMovies ] = useState(getLikedMovies);
    const [ likedMovies, setLikedMovies ] = useState([]);
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
    
    const likeMovie = (movie) => {
        if(likedMovies.indexOf(movie) === -1){
            const newArray = [...likedMovies];
            newArray.push(movie)
            setLikedMovies(newArray)
            updateLikedMovies(newArray)
        }
    }
    return { trendingMovies, 
            setTrendingMovies,
            likeMovie, 
            likedMovies, }
}
export { useMovies }
