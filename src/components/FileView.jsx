import React from "react";
import Timestamp from "./Timestamp";
import {MdAttachFile} from "react-icons/md";
import Button from "./Buttons/Button";
import {CiLock, CiUnlock} from "react-icons/ci";
import P2 from "./P2";

const FileView = ({downloadMutation, downloadPending, file, isFetched}) => {

    if (!isFetched) {
        return <p>Loading the file...</p>
    }

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-2xl font-bold">{file.fileName}.{file.fileExt}</h2>

            <div className="flex items-center gap-6">
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
                <div className="my-6 flex w-full flex-col self-start">
                    <P2>Description:</P2>
                    <p className="mt-1 rounded border px-2 py-1 border-accent">{file.description}</p>
                </div>
            )}


            <Button
                label="Download"
                isLoading={downloadPending}
                onClick={() => downloadMutation()}></Button>
        </div>
    );
};

export default FileView;