import React from "react";
import "./MainTitle.css";
import styled from "styled-components";
import "./MainTitle.css";
const getStyledDiv = (imgUrl) => {
    const StyledDiv = styled.div`
        background:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imgUrl});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 31rem;
        border-radius: 1rem;
        padding-right:2rem;
    `
    return { StyledDiv }
} 
function MainTitle({title, img}){
    const {StyledDiv} = getStyledDiv(img)
    return (
        <StyledDiv className="title-container">
            <h1 id="title-container__title">{title}</h1>
        </StyledDiv>
    )
}

export { MainTitle }