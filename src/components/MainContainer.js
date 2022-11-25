import React from "react";

function MainContainer(props) {
    return (
        <div className="main-container">
            {props.children}
        </div>
    )
}

export { MainContainer }