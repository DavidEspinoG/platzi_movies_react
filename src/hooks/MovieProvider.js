import { useState, useEffect } from "react";
import { createContext } from "react";
const MovieContext = createContext()
function MovieProvider(props){
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY =  '?api_key=bdaaaa2b20c386f0be9d20b50bd8dbe3';
    // const { item: localStorageLikedMovies, saveItem: saveLocalStorageLikedMovies } = useLocalStorage('liked_moviesV1', [] );
    const [ likedMovies, setLikedMovies ] = useState([])
    const [ trendingMovies, setTrendingMovies ] = useState([]);
    useEffect(() => {
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
    //local Storage
    // const likeMovie = (movie) => {
    //     const index = likedMovies.findIndex((element) => element.id === movie.id)
    //     const newArray = [...likedMovies];
    //     if(index === -1){
    //         newArray.push(movie)
    //     } else {
    //         newArray.splice(index, 1)
    //     }
    //     saveLikedMovies(newArray)
    // }
    const likeMovie = (movie) => {
        const index = likedMovies.findIndex((element) => element.id === movie.id)
        const newArray = [...likedMovies];
        if(index === -1){
            newArray.push(movie)
        } else {
            newArray.splice(index, 1)
        }
        setLikedMovies(newArray)
    }
    return (
        <MovieContext.Provider
            value={{
                trendingMovies, 
                likedMovies,
                likeMovie
            }}
        >
            {props.children}
        </MovieContext.Provider>
    )
}
export { MovieProvider, MovieContext }
