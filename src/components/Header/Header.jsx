import React from "react";
import MemoryBar from "../MemoryBar";
import UserIcon from "../UserIcon";

const Header = () => {

    return (
        <div className="flex items-center justify-between h-12 bg-secondary">
            <h1 className="mx-4">FileShare</h1>
            <div className="flex items-center mx-4">
                <MemoryBar></MemoryBar>
                <UserIcon></UserIcon>
            </div>
        </div>
    )
};

export default Header;