import React from "react";
function useLocalStorage() {
    const [likedMoviesLocalStorage, setLikedMoviesLocalStorage] = React.useState('')
    const getLikedMovies = () => {
        const item = JSON.parse(localStorage.getItem('liked_movies'));
        let likedMovies; 
        if(item){
            likedMovies = item;
        } else {
            likedMovies = [];
        }
        return likedMovies;
    }
    const updateLikedMovies = (movies) => {
        const item = JSON.stringify(movies)
        localStorage.setItem('liked_movies', item)
    }

    return { getLikedMovies, updateLikedMovies }

}
export { useLocalStorage }