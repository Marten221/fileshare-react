import React, {useEffect, useState} from "react";
import {fetchExensions} from "../../services/fileService";
import Dropdown from "./Dropdown";

const ExtensionDropdown = ({onExtensionChange, defaultValue}) => {
    const [extensions, setExtensions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadExtensions = async () => {
            try {
                let data = await fetchExensions();
                data = ["any", ...data]
                setExtensions(data)
                console.log("default")
                console.log(defaultValue)
                console.log(data)
            } catch (err) {
                setError(err.message);
            }
        };

        loadExtensions();
    }, []);

    const generateOptions = () => {
        return  extensions.map((extension) => (
            <option key={extension} value={extension}>.{extension}</option>
        ))
    };

    if (error) return <p>Error: {error}</p>

    return (
        <Dropdown
            id="extensions"
            onChange={onExtensionChange}
            defaultValue={defaultValue}
            label="Extension:"
            options={generateOptions()}
        />
    )
};

export default ExtensionDropdown;