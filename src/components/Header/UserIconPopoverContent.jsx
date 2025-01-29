import React from 'react'
import {getUserInfo, logOut} from "../../services/userService";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

const UserIconPopoverContent = ({loggedIn}) => {
    const navigate = useNavigate();

    const {data, isLoading} = useQuery({
        queryKey: ["userInfo"],
        queryFn: getUserInfo
    })

    const handleLogout = () => {
        logOut();
        navigate("/login");
    };

    if (loggedIn) return (
        <div className="bg-secondary p-2 m-3 flex flex-col gap-3 border border-primary rounded">
            {!isLoading && (<p>Hello, {data.firstName}</p>)}
            <button
                className="border border-primary rounded"
                onClick={handleLogout}
            >
                Log out
            </button>
        </div>
    )

    return (
        <div className="bg-secondary p-2 m-3 flex flex-col gap-3 border border-primary rounded">
            <p>Not logged in</p>
            <button
                className="border border-primary rounded"
                onClick={() => navigate("/login")}
            >
                Log in
            </button>
        </div>
    )

}

export default UserIconPopoverContent;