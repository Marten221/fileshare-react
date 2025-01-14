import React from "react";

const SubmitButton = ({label, onClick, isLoading}) => {
    return (
        <button className={`middle none center rounded-lg bg-accent py-3 px-6 w-64
            text-xs font-bold uppercase text-white transition-all hover:shadow-lg
            focus:opacity-[0.85] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50
            ${isLoading ? "bg-gray-500 pointer-events-none" : ""}`}
                onClick={onClick}
                disabled={isLoading}>
            {isLoading ? "Loading..." : label}
        </button>
    );
};

export default SubmitButton;