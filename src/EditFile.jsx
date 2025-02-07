import React, {useState} from "react";
import InputField from "./components/InputField";
import ToggleButton from "./components/ToggleButton";
import Button from "./components/Button";
import {useMutation} from "@tanstack/react-query";
import {deleteFile, updateFile} from "./services/fileService";
import P2 from "./components/P2";
import {useNavigate} from "react-router-dom";

const EditFile = ({fileDescription}) => {
    const navigate = useNavigate();
    const [updatedFile, setUpdatedFile] = useState({
        fileId: fileDescription.fileId,
        customFilename: fileDescription.fileName,
        description: fileDescription.description,
        public: fileDescription.public,
    })

    const updateForm = (e) => {
        const {name, value} = e.target
        setUpdatedFile(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const handleUpdate = async () => {
        await updateFile(updatedFile);
        window.location.reload();
    };

    const editMutation = useMutation({
        mutationFn: handleUpdate,
        onError: (error) => {
            alert(error?.message);
        },
    })

    const handleDelete = () => {
        const confirmed = window.confirm("Are you sure you want to delete this file?\n" +
            "This action can't be undone.")
        if (confirmed) {
            deleteFile(updatedFile.fileId);
            navigate('/files')
        }
    }

    const deleteMutation = useMutation({
        mutationFn: handleDelete,
        onError: (error) => {
            alert(error?.message);
        },
    })


    return (
        <>
            <form
                className="flex flex-col gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    editMutation.mutate();
                }}
            >
                <InputField
                    id="file"
                    type="file"
                    label="Upload file"
                    onChange={(e) => setUpdatedFile({...updatedFile, "file": e.target.files[0]})}
                />
                <P2>*Leave empty to keep the current file.</P2>

                <InputField
                    id="customFilename"
                    type="text"
                    label="File name"
                    value={updatedFile.customFilename}
                    onChange={(e) => updateForm(e)}
                />

                <InputField
                    id="description"
                    type="text"
                    label="Description"
                    value={updatedFile.description}
                    onChange={(e) => updateForm(e)}
                />
                <p>{updatedFile.public}</p>

                <ToggleButton
                    id="public"
                    state={updatedFile.public}
                    handleToggle={(e) => setUpdatedFile({...updatedFile, "public": e.target.checked})}
                >
                    <p className="mx-2">Public</p>
                </ToggleButton>

                <Button
                    label="update"
                />
            </form>
            <Button
                label="delete"
                color="error"
                onClick={() => deleteMutation.mutate()}
            />
        </>
    );
};

export default EditFile;