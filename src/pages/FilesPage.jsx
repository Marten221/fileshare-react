import React, {useEffect, useState} from "react";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import {fetchFiles} from "../services/fileService";
import SortingDropdown from "../components/SortingDropdown";
import ExtensionDropdown from "../components/ExtensionDropdown";
import AmountDropdown from "../components/AmountDropdown";
import FileCard from "../components/FileCard";
import PageIndicator from "../components/PageIndicator/PageIndicator";

const FilesPage = () => {
    const [keyword, setKeyword] = useState("");
    const [sorting, setSorting] = useState("name_ascending");
    const [extension, setExtension] = useState("any");
    const [page, setPage] = useState(1); // useeffect?
    const [size, setSize] = useState(15);
    const isLoading = false;
    const [files, setFiles] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    const handleSearch = async () => {
        try {
            console.log("data: " + keyword + sorting + extension + size + page);
            const data = await fetchFiles(keyword, sorting, extension, size, page - 1)
            const files = data.content
            setFiles(files)
            setTotalPages(data.totalPages)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        handleSearch();
    }, [keyword, sorting, extension, size, page]); //If the page variable changes, handleSearch is run

    return (
        <>
            <InputField
                type="text"
                placeholder="Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <SortingDropdown onSortChange={setSorting}/>
            <p>{sorting}</p>

            <ExtensionDropdown onExtensionChange={setExtension}/>
            <p>{extension}</p>

            <AmountDropdown
                onAmountChange={setSize}
                purpose="Page size"
                amountList={[10, 15, 20, 25, 30]}
            />

            <SubmitButton label="Search" onClick={handleSearch} isLoading={isLoading}/>


            <div className="card-wrapper">
                {files.map((file) =>
                    <FileCard
                        fileId={file.fileId}
                        fileName={file.fileName}
                        fileExt={file.fileExt}
                        fileSize={file.fileSize}/>
                )}
            </div>

            <PageIndicator currentPage={page} setPage={setPage} totalPages={totalPages}/>
        </>
    );
};

export default FilesPage;