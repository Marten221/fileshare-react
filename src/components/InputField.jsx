import React from "react";

const InputField = ({id, type, placeholder, label, value, onChange}) => {
    return (
        <div className="flex flex-col">
            {label && (<label className="mb-1 text-xs"
                              htmlFor={id}>{label}:</label>)}
            <input
                className="bg-secondary pl-2 w-64 py-1 rounded border
                            border-solid border-primary focus:outline-none
                            focus:rounded focus:ring-2 focus:ring-primary"
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;