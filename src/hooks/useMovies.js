import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
function useMovies(){
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY =  '?api_key=bdaaaa2b20c386f0be9d20b50bd8dbe3';
    const { getLikedMovies, updateLikedMovies } = useLocalStorage();
    const [ trendingMovies, setTrendingMovies ] = useState([]);
    const [ likedMovies, setLikedMovies ] = useState(getLikedMovies());
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
    const likedMoviesIds = likedMovies.map((movie)=> movie.id)
    const likeMovie = (movie) => {
        if(likedMoviesIds.indexOf(movie.id) === -1){
            const newArray = [...likedMovies];
            newArray.push(movie)
            setLikedMovies(newArray)
            updateLikedMovies(newArray)
            console.log("react", likedMovies)
            console.log("localStorage", getLikedMovies())
        } else {
            const newArray = [...likedMovies];
            const index = likedMovies.indexOf(movie);
            console.log(index)
            newArray.splice(index, 1)
            setLikedMovies(newArray);
            updateLikedMovies(newArray);
            console.log("react", likedMovies)
            console.log("localStorage", getLikedMovies())
        }
    }
    return { trendingMovies, 
            setTrendingMovies,
            likeMovie, 
            likedMovies,
            likedMoviesIds
    }
}
export { useMovies }
