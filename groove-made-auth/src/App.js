import React from "react";
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import Account from "./Components/Account";
import {AuthContextProvider} from "./Context/AuthContext";

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/account" element={<Account/>}/>
                </Routes>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
