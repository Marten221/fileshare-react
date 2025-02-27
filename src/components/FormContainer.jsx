import React from "react";

const FormContainer = ({backButtonOnClick, children}) => {

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="relative px-3 pt-14 lg:pt-7
                            lg:w-1/2 py-7 bg-secondary flex flex-col gap-3 items-center
                            justify-center border-solid rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default FormContainer;