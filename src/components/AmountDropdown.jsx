import React, {useEffect, useState} from "react";
import {fetchExensions} from "../services/fileService";

const AmountDropdown = ({onAmountChange, purpose, amountList}) => {

    return (
        <div>
            <label htmlFor={purpose}>{purpose}:</label>
            <select id={purpose}
                    onChange={(e) => onAmountChange(e.target.value)}
                    defaultValue="15">
                {amountList.map((amount) => (
                    <option key={amount} value={amount}>{amount}</option>
                ))}
            </select>
        </div>
    )
};

export default AmountDropdown;