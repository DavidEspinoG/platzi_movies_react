import React from "react";

function SecondaryContainer(props){
    return (
        <section className="secondary-container">
            {props.children}
        </section>
    )
}
export { SecondaryContainer }