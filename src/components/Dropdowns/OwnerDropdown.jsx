import React from "react";
import Dropdown from "./Dropdown";

const OwnerDropdown = ({onOwnerChange, value}) => {

    const sortingOptions = [
        {value: "me", label: "Me"},
        {value: "all", label: "All"},

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
            id="owner"
            onChange={onOwnerChange}
            label="Owner:"
            options={generateOptions()}
            value={value}
        />
    );
};

export default OwnerDropdown;