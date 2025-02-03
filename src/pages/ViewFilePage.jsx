import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {downloadFile, fetchFileDescription} from "../services/fileService";
import FileView from "../components/FileView/FileView";
import FormContainer from "../components/FormContainer";
import {GoGear} from "react-icons/go";
import {TiDeleteOutline} from "react-icons/ti";
import {useMutation, useQuery} from "@tanstack/react-query";
import ErrorMessage from "../components/ErrorMessage";

const ViewFilePage = () => {
    const {fileId} = useParams();


    const {data: fileDescription, isError, error, isFetched} = useQuery({
        queryKey: ["fileDescription"],
        queryFn: () => fetchFileDescription(fileId)
    })


    const handleDownload = async () => {
        const fileBlob = await downloadFile(fileId);
        const blob = new Blob([fileBlob], {type: 'application/octet-stream'});
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileDescription.fileName + "." + fileDescription.fileExt)
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
    };

    const downloadMutation = useMutation({
        mutationFn: handleDownload,
        onError: (error) => {
            alert(error?.message);
        },
    })

    if (isError) {
        return (
            <FormContainer>
                <ErrorMessage message={error.message}/>
            </FormContainer>
        )
    }

    return (
        <FormContainer>
            <FileView
                downloadMutation={downloadMutation}
                file={fileDescription}
                isFetched={isFetched}
            />
        </FormContainer>
    );
}

export default ViewFilePage;