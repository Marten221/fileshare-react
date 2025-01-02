import React from "react";

const InputField = ({type, placeholder, value, onChange}) => {
    return (
        <div className={"input-field"}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default InputField;