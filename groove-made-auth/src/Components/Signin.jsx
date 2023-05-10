import React from 'react';
import {UserAuth} from "../Context/AuthContext";
import {FcGoogle} from "react-icons/fc";

const SignIn = () => {
    const {googleSignIn} = UserAuth()
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log("errors")
        }
    }
    return (
        <div className={"flex-col items-center text-center justify-center"}>
            <h1>Sign in</h1>
            <div className={"border-2 text-center flex justify-center max-w-[100px] m-auto my-4"}>
                <FcGoogle onClick={handleGoogleSignIn} size={30} className={"cursor-pointer"}/>
            </div>
        </div>
    );
};

export default SignIn;




