import React from "react";
import {TiArrowBackOutline} from "react-icons/ti";

const BackButton = ({onClick}) => {

    return (
        <>
            <button
                className="absolute left-4 top-4 text-2xl text-accent"
                onClick={onClick}
            ><TiArrowBackOutline/></button>
        </>
    )
};

export default BackButton;