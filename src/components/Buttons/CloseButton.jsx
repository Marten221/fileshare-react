import React from "react";
import {X} from "lucide-react";

const CloseButton = ({onClick}) => {

    return (
        <button
            onClick={onClick}
            className="absolute right-4 top-4 p-1 rounded hover:bg-yellow-300 transition"
        >
            <X size={20}/>
        </button>
    )
};

export default CloseButton;