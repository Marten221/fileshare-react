import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {downloadFile, fetchFileDescription} from "../services/fileService";
import FileView from "../components/FileView";

const ViewFilePage = () => {
    const {fileId} = useParams();
    const [file, setFile] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const file = await fetchFileDescription(fileId);  // Add await here
                setFile(file);
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false)
            }
        };

        fetchData()
    }, [fileId]);

    const handleDownload = async () => {
        try {
            setLoading(true);
            const fileBlob = await downloadFile(fileId);
            const blob = new Blob([fileBlob], { type: 'application/octet-stream' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', file.fileName + "." + file.fileExt)
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
            setError("")
        } catch (error){
            setError(error.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <FileView
            handleDownload={handleDownload}
            file={file}
            error={error}
            loading={loading}
        />
    );
}

export default ViewFilePage;