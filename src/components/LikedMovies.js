import React from "react";
import {  useState } from "react";
// import { MoviesContainer } from "../components/MoviesContainer";
import { SecondaryContainer } from "./SecondaryContainer";
// import { useMovies } from "../hooks/useMovies";
import { MoviesContainer } from "./MoviesContainer";

function LikedMovies({movies}){
    const [ state, setState ] = useState([1]);

    return (
        <SecondaryContainer>
            <h2>Liked Movies</h2>
            <MoviesContainer
                movies={movies}
            />
            {state.map((element)=> <p>{element}</p>)}
            <button
                onClick={() => {
                    let newState = [...state]
                    newState.push(1)
                    setState(newState)
                }}
            >Add number</button>
            <button
                onClick={() => {
                    let newState = [...state]
                    newState.pop()
                    setState(newState)
                }}
            >Remove number</button>
        </SecondaryContainer>
    )
} 

export { LikedMovies }