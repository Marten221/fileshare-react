import React from "react";
import {fetchExtensions} from "../../services/fileService";
import Dropdown from "./Dropdown";
import {useQuery} from "@tanstack/react-query";
import ErrorMessage from "../ErrorMessage";

const ExtensionDropdown = ({onExtensionChange, defaultValue}) => {

    const {data: extensions, isFetched, isError, error} = useQuery({
        queryKey: ["getExtensions"],
        queryFn: fetchExtensions
    })

    const generateOptions = () => {
        const allExtensions = ["any", ...extensions]
        return  allExtensions.map((extension) => (
            <option key={extension} value={extension}>.{extension}</option>
        ))
    };

    if (isError) return <ErrorMessage message={error.message} />

    if (isFetched) {
        return (
            <Dropdown
                id="extensions"
                onChange={onExtensionChange}
                defaultValue={defaultValue}
                label="Extension:"
                options={generateOptions()}
            />
        );
    }

};

export default ExtensionDropdown;