import React, {useState} from "react";
import InputField from "./components/InputField";

const EditFile = ({fileDescription}) => {
    const [updatedFile, setUpdatedFile] = useState({
        fileName: "",
        description: "",

    })

    return (
        <>
            <InputField
                id="fileName"
                type="text"
                value={}
            />
        </>
    );
};

export default EditFile;