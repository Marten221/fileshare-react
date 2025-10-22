import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {downloadFile, fetchFileDescription} from "../services/fileService";
import FileView from "../components/FileView";
import FormContainer from "../components/FormContainer";
import {useMutation, useQuery} from "@tanstack/react-query";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Buttons/Button";
import EditFile from "../EditFile";
import BackButton from "../components/Buttons/BackButton";

const ViewFilePage = () => {
    const navigate = useNavigate();
    const {fileId} = useParams();
    const [isEditing, setIsEditing] = useState(false)


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

    const {mutate: downloadMutation, isPending} = useMutation({
        mutationFn: handleDownload,
        onError: (error) => {
            alert(error?.message);
        },
    })

    if (isError) {
        return (
            <FormContainer>
                <ErrorMessage
                    message={error.message}
                />
            </FormContainer>
        )
    }

    if (isEditing) {
        return (
            <FormContainer>
                <BackButton onClick={() => setIsEditing(false)} />
                <EditFile
                    fileDescription={fileDescription}
                />
            </FormContainer>
        )
    }

    return (
        <FormContainer>
            <BackButton onClick={() => navigate(-1)} />
            <FileView
                downloadMutation={downloadMutation}
                downloadPending={isPending}
                file={fileDescription}
                isFetched={isFetched}
            />

            {fileDescription?.owner && (
                <Button
                    label="edit"
                    color="edit"
                    onClick={() => setIsEditing(true)}
                />
            )}

        </FormContainer>
    );
}

export default ViewFilePage;