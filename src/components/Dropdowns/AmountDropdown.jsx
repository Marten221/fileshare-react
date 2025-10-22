import React from "react";
import Dropdown from "./Dropdown";

const AmountDropdown = ({onAmountChange, purpose, amountList, defaultValue}) => {

    const generateOptions = () => {
        return amountList.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ));
    };

    return (
        <>
            <Dropdown
                id="page"
                onChange={onAmountChange}
                defaultValue={defaultValue}
                label={purpose + ":"}
                options={generateOptions()}
            />
        </>
    )
};

export default AmountDropdown;