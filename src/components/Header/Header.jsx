import React from "react";
import MemoryBar from "./MemoryBar";
import UserIcon from "./UserIcon";
import {useQuery} from "@tanstack/react-query";
import {getLoginStatus} from "../../services/userService";

const Header = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["loginStatus"],
        queryFn: getLoginStatus,
        retryOnMount: false,
    })


    if (!isLoading) return (
        <div className="flex h-12 items-center justify-between bg-secondary">
            <a
                className="mx-4"
                href="/files"
            >FileShare</a>
            <div className="mx-4 flex items-center">
                {data.loggedIn && (<MemoryBar />)}
                <UserIcon loggedIn={data.loggedIn}/>
            </div>
        </div>
    )
};

export default Header;