import React, {useState} from "react";
import {createFile} from "../services/fileService";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

const UploadPage = () => {
    const [file, setFile] = useState(null);
    const [customFilename, setCustomFilename] = useState("");
    const [description, setDescription] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpload()
    }

    const handleUpload = async () => {
        try {
            setLoading(true)
            // Create a FormData object to handle file upload
            const formData = new FormData();

            formData.append('file', file);
            formData.append('customFilename', customFilename);
            formData.append('description', description);
            formData.append('isPublic', isPublic);
            await createFile(formData);

        }catch (err){
            console.log(err.message)
        } finally {
            setLoading(false)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                required
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <InputField
                type="text"
                placeholder="File name"
                value={customFilename}
                onChange={(e) => setCustomFilename(e.target.value)}
            />
            <InputField
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <InputField
                type="radio"
                placeholder="Description"
                value={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
            />
            <SubmitButton label="Upload" type="submit"/>
            {loading && (
                <p>Uploading...</p>
            )}
        </form>
    );
}

export default UploadPage