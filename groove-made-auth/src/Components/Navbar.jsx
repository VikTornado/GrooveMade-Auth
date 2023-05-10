import React from 'react';
import {NavLink} from "react-router-dom";
import {UserAuth} from "../Context/AuthContext";

const Navbar = () => {
    const {user, logOut} = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className={"max-w-[900px] flex m-auto justify-between items-center py-6"}>
                <div>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/contacts"}>Contacts</NavLink>
                </div>
                {user?.displayName ? (<NavLink to={"/signin"}>Sign In</NavLink>) : (
                    <button onClick={handleSignOut}>LogOut</button>)
                }
            </div>
        </div>
    );
};

export default Navbar;