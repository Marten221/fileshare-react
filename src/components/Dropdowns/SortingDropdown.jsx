import React from "react";
import Dropdown from "./Dropdown";

const SortingDropdown = ({onSortChange, value}) => {

    const sortingOptions = [
        {value: "name_ascending", label: "Name ascending"},
        {value: "name_descending", label: "Name descending"},
        {value: "date_ascending", label: "Date ascending"},
        {value: "date_descending", label: "Date descending"},
        {value: "size_ascending", label: "Size ascending"},
        {value: "size_descending", label: "Size descending"},
    ]

    const generateOptions = () => {
        return sortingOptions.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ));
    };


    return (
        <Dropdown
            id="sorting"
            onChange={onSortChange}
            label="Sort by:"
            options={generateOptions()}
            value={value}
        />
    );
};

export default SortingDropdown;