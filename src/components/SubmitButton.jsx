import React from "react";

const SubmitButton = ({label, onClick, isLoading}) => {
    return (
        <button className="submit-button"
                onClick={onClick}
                disabled={isLoading}>
            {isLoading ? "Loading..." : label}
        </button>
    );
};

export default SubmitButton;