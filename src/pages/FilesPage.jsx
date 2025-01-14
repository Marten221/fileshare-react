import React, {useEffect, useState} from "react";
import InputField from "../components/InputField";
import {fetchFiles} from "../services/fileService";
import SortingDropdown from "../components/Dropdowns/SortingDropdown";
import ExtensionDropdown from "../components/Dropdowns/ExtensionDropdown";
import AmountDropdown from "../components/Dropdowns/AmountDropdown";
import FileCard from "../components/FileCard";
import PageIndicator from "../components/PageIndicator";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoCloudUploadOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

const FilesPage = () => {
    const [keyword, setKeyword] = useState("");
    const [sorting, setSorting] = useState("name_ascending");
    const [extension, setExtension] = useState("any");
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(15);
    const [files, setFiles] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [showDropdowns, setShowDropdowns] = useState(false)
    const navigate = useNavigate();

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
    }, [keyword, sorting, extension, size, page]); //If a variable changes, handleSearch is run

    return (
        <>
            <div className="relative">
                <div className="flex flex-wrap items-center justify-center py-3">
                    <button className="left-3 flex items-center border border-solid border-accent rounded mx-2 px-2 py-1
                                        hover:bg-accent hover:text-text transition-all duration-300"
                       onClick={() => navigate(`/upload`)}
                    >
                        <IoCloudUploadOutline />
                    </button>
                    <InputField
                        id="keyword"
                        type="text"
                        placeholder="Keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button
                        className="text-2xl ml-1 text-text"
                        onClick={() => setShowDropdowns(!showDropdowns)}><RxHamburgerMenu/>
                    </button>
                </div>

                <div className={`z-40 absolute top-full flex flex-col gap-2 left-1/2 -translate-x-1/2 
                                   bg-background p-2 rounded transition-opacity duration-300
                                    ${showDropdowns ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <SortingDropdown defaultValue={sorting} onSortChange={setSorting}/>
                    <ExtensionDropdown defaultValue={extension} onExtensionChange={setExtension}/>
                    <AmountDropdown
                        defaultValue={size}
                        onAmountChange={setSize}
                        purpose="Page size"
                        amountList={[10, 15, 20, 25, 30]}
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 my-4">
                {files.map((file) =>
                    <FileCard key={file.fileId} file={file}/>
                )}
            </div>

            <PageIndicator currentPage={page} setPage={setPage} totalPages={totalPages}/>
        </>
    );
};

export default FilesPage;