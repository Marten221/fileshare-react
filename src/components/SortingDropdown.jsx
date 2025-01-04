import React from "react";

const SortingDropdown = ({onSortChange}) => {
    const sortingOptions = [
        {value: "name_ascending", label: "Name ascending"},
        {value: "name_descending", label: "Name descending"},
        {value: "date_ascending", label: "Date ascending"},
        {value: "date_descending", label: "Date descending"},
        {value: "size_ascending", label: "Size ascending"},
        {value: "size_descending", label: "Size descending"},
    ]

    return (
        <div>
            <label htmlFor="sorting">Sort by:</label>
            <select id="sorting"
                    onChange={(e) => onSortChange(e.target.value)}
                    defaultValue="name_ascending">

                {sortingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortingDropdown;