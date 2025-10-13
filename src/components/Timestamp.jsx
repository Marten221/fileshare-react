import React from "react";
import {MdOutlineDateRange} from "react-icons/md";

const Timestamp = ({timestamp}) => {
    return (
        <span className="flex items-center text-sm font-thin"><MdOutlineDateRange />{timestamp.day}.{timestamp.month}.{timestamp.year}, {timestamp.hour}:{timestamp.minute}</span>
    );
};

export default Timestamp;