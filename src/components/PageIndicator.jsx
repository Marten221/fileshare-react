import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AmountDropdown = ({setPage, totalPages, currentPage}) => {

    const decreasePage = () => {
        if (currentPage <= 1) return;

        setPage((prevPage) => prevPage - 1); // react functional update
    }

    const increasePage = () => {
        if (currentPage >= totalPages) return;

        setPage((prevPage) => prevPage + 1);
    }

    const handlePageChange = (e) => {
        const page = Math.max(0, Math.min(e.target.value, totalPages));
        setPage(page);
    }

    return (
        <div className="flex justify-center items-center opacity-0 animate-fade-in mb-3"
             style={{animationDelay: `${2 * 50}ms`}}>

            <button className={`bg-transparent p-2 ${currentPage > 1 ? "" : "cursor-default opacity-0"}`}
                    onClick={decreasePage}>
                <IoIosArrowBack />
            </button>

            <input
                className="h-8 w-12 rounded border border-accent bg-secondary p-0 text-center text-xs font-medium text-text [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                type="number"
                min="1"
                value={currentPage}
                onChange={(e) => handlePageChange(e)}
            />

            <button className={`bg-transparent p-2 ${currentPage < totalPages ? "" : "cursor-default opacity-0"}`}
                    onClick={increasePage}>
                <IoIosArrowForward />
            </button>
        </div>
    )
};

export default AmountDropdown;