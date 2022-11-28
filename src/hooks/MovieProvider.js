import { useState, useEffect } from "react";
import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
const MovieContext = createContext()
function MovieProvider(props){
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY =  'bdaaaa2b20c386f0be9d20b50bd8dbe3';
    // const categoryLocalStorage = JSON.parse(localStorage.getItem('category')) 
    const { item: likedMovies, saveItem: setLikedMovies } = useLocalStorage('liked_moviesV1', [] );
    const { item: moviesByCategory, saveItem: setMoviesByCategory } = useLocalStorage('category', [] );
    const [ trendingMovies, setTrendingMovies ] = useState([]);
    const [ query, setQuery ] = useState('');
    const [ searchedMovies, setSearchMovies ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    // const [ moviesByCategory, setMoviesByCategory ] = useState( [])
    useEffect(() => {
        const getTrendingMovies = async () => {
            try{
                const endpoint = 'trending/movie/day'
                const res = await fetch(BASE_URL + endpoint + '?api_key=' + API_KEY)
                const data = await res.json()
                const movies = data.results;
                setTrendingMovies(movies)
            } catch(error) {console.log(error)}
        }
        getTrendingMovies()
            .catch(console.error)
    },[]);
    useEffect(() => {
        const getCategories = async () => {
            try{
                const endpoint = 'genre/movie/list'
                const res = await fetch(BASE_URL + endpoint + '?api_key=' + API_KEY)
                const data = await res.json();
                const categories = data.genres;
                setCategories(categories);
            } catch(error) {console.log(error)}
        }
        getCategories()
            .catch(console.error)
    },[]);
    const getMoviesByCategory = async (category) => {
        const endpoint = 'discover/movie?with_genres='
        const res = await fetch(BASE_URL + endpoint + category + '&api_key=' + API_KEY);
        const data = await res.json(); 
        // const stringified = JSON.stringify(data.results)
        // const parsed = JSON.parse(stringified)
        // console.log(parsed)
        // localStorage.setItem('category', JSON.stringify(data.results));
        setMoviesByCategory(data.results);
    }
    const getSearchResult = async () => {
        try {
            const endpoint = 'search/movie'
            const res = await fetch(BASE_URL + endpoint + '?api_key='+ API_KEY + '&query=' + query);
            const data = await res.json(); 
            setSearchMovies(data.results)
        } catch(error) {
            console.log(error)
        }
    }
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
                likeMovie,
                setQuery, 
                searchedMovies, 
                getSearchResult,
                categories, 
                getMoviesByCategory,
                moviesByCategory
            }}
        >
            {props.children}
        </MovieContext.Provider>
    )
}
export { MovieProvider, MovieContext }
