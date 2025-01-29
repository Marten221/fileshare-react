import React from "react";
import MemoryBar from "./MemoryBar";
import UserIcon from "./UserIcon";
import {useQuery} from "@tanstack/react-query";
import {getLoginStatus} from "../../services/userService";

const Header = () => {

    const {data, isLoading} = useQuery({
        queryKey: ["loginStatus"],
        queryFn: getLoginStatus
    })


    if (!isLoading) return (
        <div className="flex items-center justify-between h-12 bg-secondary">
            <h1 className="mx-4">FileShare</h1>
            <div className="flex items-center mx-4">
                {data.loggedIn && (<MemoryBar />)}
                <UserIcon loggedIn={data.loggedIn}/>
            </div>
        </div>
    )
};

export default Header;