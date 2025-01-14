import React from "react";

const AmountDropdown = ({setPage, totalPages, currentPage}) => {

    const decreasePage = () => {
        if (currentPage <= 1) return;

        setPage((prevPage) => prevPage - 1); // react functional update
    }

    const increasePage = () => {
        if (currentPage >= totalPages) return;

        setPage((prevPage) => prevPage + 1);
    }

    return (
        <div className="flex justify-center items-center opacity-0 animate-fade-in"
             style={{ animationDelay: `${2 * 50}ms` }}>
            {currentPage > 1 && (
                <button className="bg-transparent p-2" onClick={decreasePage}>&#8592;</button>
            )}

            <span>{currentPage}</span>
            {currentPage < totalPages && (
                <button className="bg-transparent p-2" onClick={increasePage}>&#8594;</button>
            )}
        </div>
    )
};

export default AmountDropdown;