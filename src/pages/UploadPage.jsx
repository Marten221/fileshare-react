import React, {useState} from "react";
import {createFile} from "../services/fileService";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import FormContainer from "../components/FormContainer";
import ToggleButton from "../components/ToggleButton";
import ErrorMessage from "../components/ErrorMessage";
import {useNavigate} from "react-router-dom";

const UploadPage = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [customFilename, setCustomFilename] = useState("");
    const [description, setDescription] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');

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
            formData.append('public', isPublic);
            await createFile(formData);
            navigate("/files")
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false)
        }
    }


    return (
        <FormContainer>
            <form className="flex flex-col gap-2"
                  onSubmit={handleSubmit}>
                <input
                    required
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputField
                    id="filename"
                    type="text"
                    placeholder="File name"
                    value={customFilename}
                    onChange={(e) => setCustomFilename(e.target.value)}
                />
                <InputField
                    id="description"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <ToggleButton handleToggle={(e) => setIsPublic(e.target.checked)} state={isPublic}><p className="mx-2">Public</p>
                </ToggleButton>
                <SubmitButton label="Upload" type="submit"/>
                {loading && (
                    <p>Uploading...</p>
                )}
            </form>
            {error && <ErrorMessage message={error}></ErrorMessage>}
        </FormContainer>
    );
}

export default UploadPage