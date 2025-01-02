import React, {useState} from "react";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import {fetchFiles} from "../services/fileService";
import SortingDropdown from "../components/SortingDropdown";

const FilesPage = () => {
    const [keyword, setKeyword] = useState("");
    const [sorting, setSorting] = useState("");
    const [extension, setExtension] = useState("");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(15);
    const isLoading = false;
    const [files, setFiles] = useState([])

    const handleSearch = async () => {
        try {
            const data = await fetchFiles(keyword, sorting)
            const files = data.content
            setFiles(files)
            console.log(files)
        } catch (err) {
            console.log(err)
        }
    };

    const changeSort = (selectedSorting) => {
        setSorting(selectedSorting)
    };

    return (
        <>
            <InputField
                type="text"
                placeholder="Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <SortingDropdown onSortChange={changeSort} />


            <p>{sorting}</p>

            {files.map((file) =>
                <p key={file.fileId}>{file.fileName}</p>
            )}


            <SubmitButton label="Search" onClick={handleSearch} isLoading={isLoading}/>
        </>
    );
};

export default FilesPage;