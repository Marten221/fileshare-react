import React from "react";
import Timestamp from "../Timestamp";
import ErrorMessage from "../ErrorMessage";
import {MdAttachFile} from "react-icons/md";
import SubmitButton from "../SubmitButton";
import {CiLock} from "react-icons/ci";
import {CiUnlock} from "react-icons/ci";
import P2 from "../P2";

const FileView = ({handleDownload, file, error, loading}) => {

    if (loading || !file) {
        return <p>Loading the file...</p>
    }

    if (error) {
        return <ErrorMessage message={error}/>
    }
    //If the file exists
    if (file.fileId) {
        return (
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="text-2xl font-bold">{file.fileName}.{file.fileExt}</h2>

                <div className="flex gap-6 items-center">
                    <Timestamp timestamp={file.timestamp}/>
                    <P2>
                        <MdAttachFile/>{file.fileSize}
                    </P2>

                    <div className="flex items-center">
                        {file.public ? <CiUnlock/> : <CiLock/>}
                        {file.public ? <P2>Public</P2> : <P2>Private</P2>}
                    </div>
                </div>

                {file.description && (
                    <div className="flex flex-col self-start my-6 w-full">
                        <P2>Description:</P2>
                        <p className="border border-accent rounded px-2 py-1 mt-1">{file.description}</p>
                    </div>
                )}


                <SubmitButton onClick={handleDownload} label={loading ? "Loading..." : "Download"}></SubmitButton>

                <ErrorMessage message={error}/>
            </div>
        );
    }

};

export default FileView;