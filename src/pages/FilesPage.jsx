import React, {useState} from "react";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import {fetchFiles} from "../services/fileService";
import SortingDropdown from "../components/SortingDropdown";
import ExtensionDropdown from "../components/ExtensionDropdown";

const FilesPage = () => {
    const [keyword, setKeyword] = useState("");
    const [sorting, setSorting] = useState("name_ascending");
    const [extension, setExtension] = useState("any");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(15);
    const isLoading = false;
    const [files, setFiles] = useState([])

    const handleSearch = async () => {
        try {
            console.log("data: " + keyword + sorting + extension);
            const data = await fetchFiles(keyword, sorting, extension)
            const files = data.content
            setFiles(files)
            console.log(files)
        } catch (err) {
            console.log(err)
        }
    };
    //handleSearch();

    return (
        <>
            <InputField
                type="text"
                placeholder="Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <SortingDropdown onSortChange={setSorting} />
            <p>{sorting}</p>

            <ExtensionDropdown onExtensionChange={setExtension}/>
            <p>{extension}</p>

            {files.map((file) =>
                <p key={file.fileId}>{file.fileName}</p>
            )}


            <SubmitButton label="Search" onClick={handleSearch} isLoading={isLoading}/>
        </>
    );
};

export default FilesPage;