import React from "react";

export default function CriationsBanner(props){
    return(
        <div className="creation-banner" id={props.propID}>
            <img src={props.src} alt="creation-banner" />
            <h2>{props.title}</h2>
        </div>
    )
}