import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className={"max-w-[900px] flex m-auto justify-between items-center py-6"}>
                <div>
                    <NavLink>Home</NavLink>
                    <NavLink>Contacts</NavLink>
                </div>
                <NavLink>Sign In</NavLink>
            </div>
        </div>
    );
};

export default Navbar;