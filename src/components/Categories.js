import React, { useContext } from "react";
import { MovieContext } from "../hooks/MovieProvider";
import { SecondaryContainer } from "../components/SecondaryContainer";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
function Categories() {
    const navigate = useNavigate()
    const { categories, getMoviesByCategory } = useContext(MovieContext);
    return (
        <SecondaryContainer>
            <h2>Categories</h2>
            <div className="category-container">
                {categories.map((category)=> (
                    <div key={category.id} className="category" onClick={async () => {
                        await getMoviesByCategory(category.id)
                        navigate('/categoryDetail', {state: {category_name: category.name}})
                    }} >{category.name}</div>
                ))}
            </div>
        </SecondaryContainer>
        
    )
}
export {Categories};