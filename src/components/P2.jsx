import React from "react";

//Paragraph 2, with small text size and thin font.
const P2 = ({children}) => {

    return (
        <p className="flex items-center text-sm font-thin">
            {children}
        </p>
    )
};

export default P2;