import React, {useEffect, useState} from "react";
import {getDiskspace} from "../../services/userService";

const MemoryBar = () => {
    //const percentage = (358485172224 / 511310819328) * 100;
    const [percentage, setPercentage] = useState(0)
    const [error, setError] = useState("")


    const formatBytes = (bytes) => {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (bytes === 0) return "0 Byte";
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
    };

    const handleCall = async () => {
        try {
            const data = await getDiskspace()
            setPercentage(data.usableSpace / data.totalSpace * 100)
        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(() => {
        handleCall()
    }, []);

    if (error) return <></>;

    return (
        <div className="relative w-24 h-2 mx-4">
        <span className="w-24 h-2 mx-2 rounded bg-gradient-to-r from-green-500 to-red-500 absolute">
          <span
              className="h-2 bg-gray-700 absolute right-0 rounded-r"
              style={{width: `${percentage}%`}}
          ></span>
        </span>
        </div>
    )
};

export default MemoryBar;

