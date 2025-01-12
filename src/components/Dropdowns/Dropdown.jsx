import React from "react";

const Dropdown = ({id, onChange, defaultValue, label, options}) => {

    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <select className="bg-secondary border border-accent rounded p-1 m-1 w-40"
                    id={id}
                    onChange={(e) => onChange(e.target.value)}
                    defaultValue={defaultValue}>

                {options}
            </select>
        </div>
    );
};

export default Dropdown;