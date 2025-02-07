import React from "react";
import {useNavigate} from "react-router-dom";
import Timestamp from "./Timestamp";
import {MdAttachFile} from "react-icons/md";
import P2 from "./P2";
import {CiLock, CiUnlock} from "react-icons/ci";

const FileCard = ({file}) => {
    const navigate = useNavigate();

    return (
        <button className="border border-solid border-accent rounded
            w-full sm:w-80 md:w-96 lg:w-80 h-52 sm:h-64 lg:h-52
            flex flex-col items-center gap-3 p-4
            hover:bg-accent hover:text-text transition-all duration-300"
                onClick={() => navigate(`/file/${file.fileId}`)}>

            <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg">{file.fileName}.{file.fileExt}</h3>
                <div className="mt-3 mb-1 flex gap-3">
                    <Timestamp timestamp={file.timestamp}></Timestamp>
                    <P2>
                        <MdAttachFile/>{file.fileSize}
                    </P2>
                </div>

                <div className="flex items-center">
                    {file.public ? <CiUnlock/> : <CiLock/>}
                    {file.public ? <P2>Public</P2> : <P2>Private</P2>}
                </div>
            </div>

            <p className="text-sm">{file.description}</p>

        </button>
    )
        ;
};

export default FileCard;