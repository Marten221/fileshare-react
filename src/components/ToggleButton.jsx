import React from "react";

const ToggleButton = ({handleToggle, state, children}) => {

    return (
        <>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="appearance-none w-9 focus:outline-none checked:bg-accent h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-secondary before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-500 before:ml-0.5"
                    onChange={handleToggle}
                    checked={state}
                />
                {children}
            </div>
        </>
    )
};

export default ToggleButton;