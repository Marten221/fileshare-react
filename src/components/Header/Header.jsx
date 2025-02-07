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
        <div className="flex items-center justify-between h-12 bg-secondary">
            <a
                className="mx-4"
                href="/files"
            >FileShare</a>
            <div className="flex items-center mx-4">
                {data.loggedIn && (<MemoryBar />)}
                <UserIcon loggedIn={data.loggedIn}/>
            </div>
        </div>
    )
};

export default Header;