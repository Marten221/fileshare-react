import React from "react";
import Timestamp from "./Timestamp";

const FileView = ({handleDownload, file, error, loading}) => {

    //If the file exists
    if (file.fileId) {
        return (
            <div>
                <h2>{file.fileName}.{file.fileExt}</h2>

                <div>
                    <p>{file.fileSize}</p>
                    <Timestamp timestamp={file.timestamp}/>
                </div>

                <p>{file.description}</p>

                <button onClick={handleDownload}>{loading ? "Loading..." : "Download"}</button>

                {error && (
                    <p>{error}</p>
                )}
            </div>
        );
    } else {
        return (<p>You don't have access to this file</p>)
    }

};

export default FileView;