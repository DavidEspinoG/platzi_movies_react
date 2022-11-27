import React, { useEffect, useContext } from "react";
import { MovieContext } from "../hooks/MovieProvider";
import { SecondaryContainer } from "../components/SecondaryContainer";
import "./Categories.css";
function Categories() {
    const { categories } = useContext(MovieContext);
    useEffect(() => {
        console.log(categories)
    })
    return (
        <SecondaryContainer>
            <h2>Categories</h2>
            <div className="category-container">
                {categories.map((category)=> (
                    <div className="category" key={category.id}>{category.name}</div>
                ))}
            </div>
        </SecondaryContainer>
        
    )
}
export {Categories};