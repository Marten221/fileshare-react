import React from "react";

const FileCard = ({fileId, fileName, fileExt, description, fileSize, isPublic}) => {
    return (
        <button className="file-card">
            <h3>{fileName}<p>.{fileExt}</p></h3>
            <p>{description}</p>
            <p>{fileSize}</p>
        </button>
    );
};

export default FileCard;