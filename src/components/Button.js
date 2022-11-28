import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledButton = styled.button`
    color: var(--white);
    background-color: var(--dark-orange);
    border: none;
    padding: 1.9rem;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`

function Button(props){
    return (
        <Link to={props.to}>
            <StyledButton>
                {props.children}
            </StyledButton>
        </Link>
    )
}
export { Button }