import React from "react";
import {GoGear} from "react-icons/go";
import {TiDeleteOutline} from "react-icons/ti";

const FormContainer = ({children}) => {

    return (
    <div className="h-screen flex items-center justify-center">
        <div className="min-h-[50%] max-h-[95%] h-auto w-11/12 sm:w-3/4 md:w-2/3
                            lg:w-1/2 py-5 bg-secondary flex flex-col gap-3 items-center
                            justify-center border-solid rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default FormContainer;