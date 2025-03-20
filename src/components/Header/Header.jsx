import React from "react";
import MemoryBar from "./MemoryBar";
import UserIcon from "./UserIcon";
import {useQuery} from "@tanstack/react-query";
import {getUserInfo} from "../../services/userService";

const Header = ({isFetched, loggedIn}) => {
    const {data: userData} = useQuery({
        queryKey: ["userInfo"],
        queryFn: getUserInfo,
        retryOnMount: false,
        enabled: loggedIn
    })


    return (
        <div className="flex h-12 items-center justify-between bg-secondary">
            <a
                className="mx-4"
                href="/files"
            >FileShare</a>

            {isFetched && (
                <div className="mx-4 flex items-center">
                    {loggedIn && (
                        <MemoryBar/>
                    )}
                    <UserIcon
                        loggedIn={loggedIn}
                        userData={userData}
                    />
                </div>
            )}
        </div>
    )
};

export default Header;