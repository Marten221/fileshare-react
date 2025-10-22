import React, {useEffect, useRef, useState} from "react";
import InputField from "../components/InputField";
import {fetchFiles} from "../services/fileService";
import SortingDropdown from "../components/Dropdowns/SortingDropdown";
import ExtensionDropdown from "../components/Dropdowns/ExtensionDropdown";
import AmountDropdown from "../components/Dropdowns/AmountDropdown";
import FileCard from "../components/FileCard";
import PageIndicator from "../components/PageIndicator";
import {RxHamburgerMenu} from "react-icons/rx";
import Header from "../components/Header/Header";
import {useQuery} from "@tanstack/react-query";
import OwnerDropdown from "../components/Dropdowns/OwnerDropdown";
import {getLoginStatus} from "../services/userService";
import UploadButton from "../components/Buttons/UploadButton";
import {useSearchParams} from "react-router-dom";

const FilesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");
    const [sorting, setSorting] = useState(searchParams.get("sorting") || "date_descending");
    const [owner, setOwner] = useState(searchParams.get("owner") || "all");
    const [extension, setExtension] = useState(searchParams.get("extension") || "any");
    const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
    const [size, setSize] = useState(Number(searchParams.get("size")) || 15);
    const [files, setFiles] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [showDropdowns, setShowDropdowns] = useState(false)
    const dropdownRef = useRef(null);
    const burgerButtonRef = useRef(null);
    const [loggedIn, setLoggedIn] = useState(false)

    const {data: sessionStatusData, isFetched: sessionDataFetched,} = useQuery({
        queryKey: ["loginStatus"],
        queryFn: getLoginStatus,
        retryOnMount: false,
    })
    useEffect(() => {
        if (sessionDataFetched && sessionStatusData) {
            setLoggedIn(sessionStatusData.loggedIn);
        }
    }, [sessionStatusData, sessionDataFetched]);

    const { data } = useQuery({
        queryKey: ['files', keyword, sorting, owner, extension, size, page],
        queryFn: () => fetchFiles(keyword, sorting, owner, extension, size, page - 1)
    });

    useEffect(() => {
        if (data) {
           setFiles(data.content)
           setTotalPages(data.totalPages)
        }
    }, [data]);
    useEffect(() => {
        setSearchParams({
            keyword,
            sorting,
            owner,
            extension,
            page,
            size
        });
    }, [keyword, sorting, owner, extension, page, size, setSearchParams]);

    //For closing the sorting menu when clicking outside of it or on the menu icon again
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                burgerButtonRef.current && !burgerButtonRef.current.contains(event.target)) {
                setShowDropdowns(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <Header isFetched={sessionDataFetched} loggedIn={loggedIn}/>
            <div className="relative">
                <div className="flex flex-wrap items-center justify-center py-3">
                    {loggedIn && (<UploadButton />)}
                    <InputField
                        id="keyword"
                        type="text"
                        placeholder="Keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button
                        className="ml-1 text-2xl text-text"
                        ref={burgerButtonRef}
                        onClick={() => setShowDropdowns(!showDropdowns)}><RxHamburgerMenu/>
                    </button>
                    {/* TODO: move burger menu to a separate component.*/}
                </div>

                <div className={`z-40 absolute top-full flex flex-col gap-2 left-1/2 -translate-x-1/2 
                                   bg-secondary p-2 rounded transition-opacity duration-300
                                    ${showDropdowns ? "opacity-100 visible" : "opacity-0 invisible"}`}
                     ref={dropdownRef}>
                    <SortingDropdown defaultValue={sorting} onSortChange={setSorting}/>
                    {loggedIn &&(
                        <OwnerDropdown defaultValue={owner} onOwnerChange={setOwner}/>
                    )}
                    <ExtensionDropdown defaultValue={extension} onExtensionChange={setExtension}/>
                    <AmountDropdown
                        defaultValue={size}
                        onAmountChange={setSize}
                        purpose="Page size"
                        amountList={[10, 15, 20, 25, 30]}
                    />
                </div>
            </div>

            <div className="my-4 flex flex-wrap justify-center gap-6">
                {files.map((file) =>
                    <FileCard key={file.fileId} file={file}/>
                )}
            </div>

            <PageIndicator currentPage={page} setPage={setPage} totalPages={totalPages}/>
        </>
    );
};

export default FilesPage;