import React from "react";
import {useNavigate} from "react-router-dom";
import Timestamp from "./Timestamp";

const FileCard = ({file}) => {
    const navigate = useNavigate();

    return (
        <button className="border border-solid border-accent rounded
            w-full sm:w-80 md:w-96 lg:w-80 h-52 sm:h-64 lg:h-52
            flex flex-col items-center justify-between gap-3 p-4
            hover:bg-accent hover:text-text transition-all duration-300"
                onClick={() => navigate(`/file/${file.fileId}`)}>
            <h3>{file.fileName}.{file.fileExt}</h3>
            <Timestamp timestamp={file.timestamp}></Timestamp>
            <p>{file.description}</p>
            <p>{file.fileSize}</p>
        </button>
    );
};

export default FileCard;