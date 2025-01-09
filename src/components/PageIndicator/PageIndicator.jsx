import React, {useEffect} from "react";
import styles from "./PageIndicator.module.css"

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
        <div className={styles.pageIndicator}>
            {currentPage > 1 && (
                <button className={styles.arrow} onClick={decreasePage}>&#8592;</button>
            )}

            <span>{currentPage}</span>

            {currentPage < totalPages && (
                <button className={styles.arrow} onClick={increasePage}>&#8594;</button>
            )}
        </div>
    )
};

export default AmountDropdown;