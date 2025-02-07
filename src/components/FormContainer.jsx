import React from "react";

const FormContainer = ({children}) => {

    return (
    <div className="flex h-screen items-center justify-center">
        <div className="relative
                            lg:w-1/2 py-5 bg-secondary flex flex-col gap-3 items-center
                            justify-center border-solid rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default FormContainer;