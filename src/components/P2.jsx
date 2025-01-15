import React from "react";

//Paragraph 2, with small text size and thin font.
const P2 = ({children}) => {

    return (
        <p className="text-sm font-thin flex items-center">
            {children}
        </p>
    )
};

export default P2;