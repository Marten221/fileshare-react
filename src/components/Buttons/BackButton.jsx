import React from "react";
import {TiArrowBackOutline} from "react-icons/ti";

const BackButton = ({onClick}) => {

    return (
        <>
            <button
                className="absolute top-4 left-4 text-2xl text-accent"
                onClick={onClick}
            ><TiArrowBackOutline/></button>
        </>
    )
};

export default BackButton;