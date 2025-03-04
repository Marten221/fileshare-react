import React from "react";

const Dropdown = ({id, onChange, defaultValue, label, options}) => {

    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <select className="m-1 w-40 rounded border p-1 bg-secondary border-accent"
                    id={id}
                    onChange={(e) => onChange(e.target.value)}
                    defaultValue={defaultValue}>

                {options}
            </select>
        </div>
    );
};

export default Dropdown;