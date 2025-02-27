import React from "react";
import {TiArrowBackOutline} from "react-icons/ti";

const BackButton = ({onClick}) => {

    return (
        <>
            <button
                className="absolute top-3 left-1 text-2xl text-primary"
                onClick={onClick}
            ><TiArrowBackOutline/></button>
        </>
    )
};

export default BackButton;