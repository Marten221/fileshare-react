import React from "react";
import MemoryBar from "./MemoryBar";
import UserIcon from "./UserIcon";
import {useQuery} from "@tanstack/react-query";
import {getLoginStatus, getUserInfo} from "../../services/userService";

const Header = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["loginStatus"],
        queryFn: getLoginStatus,
        retryOnMount: false,
    })

    const {data: userData} = useQuery({
        queryKey: ["userInfo"],
        queryFn: getUserInfo
    })


    return (
        <div className="flex h-12 items-center justify-between bg-secondary">
            <a
                className="mx-4"
                href="/files"
            >FileShare</a>

            {!isLoading && (
                <div className="mx-4 flex items-center">
                    {data.loggedIn && (
                        <MemoryBar/>
                    )}
                    <UserIcon
                        loggedIn={data.loggedIn}
                        userData={userData}
                    />
                </div>
            )}
        </div>
    )
};

export default Header;