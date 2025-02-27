import React, {useState} from "react";
import {getDiskspace} from "../../services/userService";
import {useQuery} from "@tanstack/react-query";
import {Popover} from "react-tiny-popover";
import P2 from "../P2";

const MemoryBar = () => {
    const [percentage, setPercentage] = useState(0)
    const [open, setOpen] = useState(false)


    const handleCall = async () => {
        const data = await getDiskspace()
        const totalSpace = data.totalMemory;
        const availableSpace = totalSpace - data.usedMemory;
        setPercentage(availableSpace / totalSpace * 100)
        return data;
    }

    const {data, isLoading, isError} = useQuery({
        queryKey: ["memoryInfo"],
        queryFn: handleCall
    })

    if (isError || isLoading) return <></>;

    return (
        <Popover
            isOpen={open}
            positions={['bottom', 'left']}
            content={
                <div className="m-3 rounded border p-2 bg-secondary border-primary">
                    <P2>Used memory: {data.usedMemoryHumanReadable ? data.usedMemoryHumanReadable : "0.00 GB"}</P2>
                    <P2>Available memory: {data.totalMemoryHumanReadable}</P2>
                </div>
            }
        >
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="relative mx-4 h-2 w-24">
            <span className="absolute mx-2 h-2 w-24 rounded bg-gradient-to-r from-green-500 to-red-500">
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

