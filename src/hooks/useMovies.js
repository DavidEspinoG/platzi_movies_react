import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
function useMovies(){
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY =  '?api_key=bdaaaa2b20c386f0be9d20b50bd8dbe3';
    const { item: likedMovies, saveItem: saveLikedMovies } = useLocalStorage('liked_moviesV1', [] );
    const [ trendingMovies, setTrendingMovies ] = useState([]);
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
        const index = likedMovies.findIndex((element) => element.id === movie.id)
        const newArray = [...likedMovies];
        if(index === -1){
            newArray.push(movie)
        } else {
            newArray.splice(index, 1)
        }
        saveLikedMovies(newArray)
        console.log(likedMovies)
        console.log(index)
    }
    return {trendingMovies,
            likeMovie, 
            likedMovies,
    }
}
export { useMovies }
