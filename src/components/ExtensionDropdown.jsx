import React, {useEffect, useState} from "react";
import {fetchExensions} from "../services/fileService";

const ExtensionDropdown = ({onExtensionChange}) => {
    const [extensions, setExtensions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadExtensions = async () => {
            try {
                const data = await fetchExensions();
                setExtensions(data)
            } catch (err) {
                setError(err.message);
            }
        };

        loadExtensions();
    }, []);

    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <label htmlFor="extensions">Extension:</label>
            <select id="extensions"
                    onChange={(e) => onExtensionChange(e.target.value)}
                    defaultValue="any">
                    <option key="any" value="any">any</option>
                {extensions.map((extension) => (
                    <option key={extension} value={extension}>.{extension}</option>
                ))}
            </select>
        </div>
    )
};

export default ExtensionDropdown;