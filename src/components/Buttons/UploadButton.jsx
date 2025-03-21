import React from "react";
import {IoCloudUploadOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

const UploadButton = () => {
    const navigate = useNavigate();

    return (
        <button className="left-3 flex items-center border border-solid border-accent rounded mx-2 px-2 py-1
                                        hover:bg-accent hover:text-text transition-all duration-300"
                onClick={() => navigate(`/upload`)}
        >
            <IoCloudUploadOutline/>
        </button>
    );
};

export default UploadButton;