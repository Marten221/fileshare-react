import React, {useState} from 'react'
import {FaRegUser} from "react-icons/fa6";
import {Popover} from "react-tiny-popover";
import UserIconPopoverContent from "./UserIconPopoverContent";

const UserIcon = ({loggedIn, userData}) => {
    const [open, setOpen] = useState(false)



    return (
        <Popover
            isOpen={open}
            onClickOutside={() => setOpen(false)}
            positions={['bottom', 'left']}
            content={
                <UserIconPopoverContent
                    userData={userData}
                    loggedIn={loggedIn}
                />
            }
        >
            <div
                onClick={() => setOpen(!open)}
            >
                <FaRegUser/>
            </div>
        </Popover>
    )
}

export default UserIcon;