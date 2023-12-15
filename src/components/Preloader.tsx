import loading from "../assets/images/Ellipsis-1.5s-200px.svg";
import React from "react";

export const Preloader = () => {
    return <img src={loading} alt={'Loading...'} style={{margin: '20px, auto', width: '100%'}}/>
}