import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
    const { currentUser, logout } = useAuth();
    return (
        <div className="title">
            <div className="nav">
                <h1>Gallerina</h1>
                <div className="login-form">
                    {
                        !currentUser ? (
                            <>
                                <h1 className="form-btn">
                                    <Link to="/login">Log In</Link>
                                </h1>
                                <h1 className="form-btn">
                                    <Link to="/signup">Sign Up</Link>
                                </h1>
                            </>
                        ) : (
                            <h1 className="form-btn">
                                <span onClick={logout}>Log Out</span>
                            </h1>
                        ) 
                    }
                </div>
            </div>
            <h2>Your Pictures</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

export default Header;
