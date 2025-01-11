import React from "react";
import {useNavigate} from "react-router-dom";
import Timestamp from "./Timestamp";

const FileCard = ({file}) => {
    const navigate = useNavigate();

    return (
        <button className="file-card" onClick={() => navigate(`/file/${file.fileId}`)}>
            <h3>{file.fileName}<p>.{file.fileExt}</p></h3>
            <Timestamp timestamp={file.timestamp}></Timestamp>
            <p>{file.description}</p>
            <p>{file.fileSize}</p>
        </button>
    );
};

export default FileCard;