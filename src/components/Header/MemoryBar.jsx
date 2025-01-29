import React, {useState} from "react";
import {getDiskspace} from "../../services/userService";
import {useQuery} from "@tanstack/react-query";
import {Popover} from "react-tiny-popover";
import P2 from "../P2";

const MemoryBar = () => {
    const [percentage, setPercentage] = useState(0)
    const [error, setError] = useState("")
    const [open, setOpen] = useState(false)


    const handleCall = async () => {
        try {
            const data = await getDiskspace()
            const totalSpace = data.totalMemory;
            const availableSpace = totalSpace - data.usedMemory;
            setPercentage(availableSpace / totalSpace * 100)
            return data;
        } catch (err) {
            setError(err.message)
        }
    }

    const {data, isLoading} = useQuery({
        queryKey: ["memoryInfo"],
        queryFn: handleCall
    })

    if (error || isLoading) return <></>;

    return (
        <Popover
            isOpen={open}
            positions={['bottom', 'left']}
            content={
                <div className="bg-secondary border border-primary rounded p-2 m-3">
                    <P2>Used memory: {data.usedMemoryHumanReadable}</P2>
                    <P2>Available memory: {data.totalMemoryHumanReadable}</P2>
                </div>
            }
        >
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="relative w-24 h-2 mx-4">
            <span className="w-24 h-2 mx-2 rounded bg-gradient-to-r from-green-500 to-red-500 absolute">
              <span
                  className={`h-2 bg-gray-700 absolute right-0 rounded-r ${percentage < 98 ? "" : "rounded-l"}`} // if the progress bar is fully covered, rounded-l makes it look nicer.
                  style={{width: `${percentage}%`}}
              ></span>
            </span>
            </div>
        </Popover>
    )
};

export default MemoryBar;

