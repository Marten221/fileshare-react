import React from 'react'
import {logOut} from "../../services/userService";
import {useNavigate} from "react-router-dom";

const UserIconPopoverContent = ({userData, loggedIn}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate("/login");
    };

    if (loggedIn) return (
        <div className="m-3 flex flex-col gap-3 rounded border p-2 bg-secondary border-primary">
            <p>Hello, {userData.firstName}</p>
            <button
                className="rounded border border-primary"
                onClick={handleLogout}
            >
                Log out
            </button>
        </div>
    )

    return (
        <div className="m-3 flex flex-col gap-3 rounded border p-2 bg-secondary border-primary">
            <p>Not logged in</p>
            <button
                className="rounded border border-primary"
                onClick={() => navigate("/login")}
            >
                Log in
            </button>
        </div>
    )

}

export default UserIconPopoverContent;