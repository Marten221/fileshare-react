import React from "react";
import Dropdown from "./Dropdown";

const AmountDropdown = ({onAmountChange, purpose, amountList, value}) => {

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
                value={value}
                label={purpose + ":"}
                options={generateOptions()}
            />
        </>
    )
};

export default AmountDropdown;