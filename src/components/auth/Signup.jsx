import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const history = useHistory();
    const confirmPasswordRef = useRef();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if ( passwordRef.current.value !== confirmPasswordRef.current.value)
            return;

        try {
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            console.log("Failed to create an account");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div>
                    <input ref={emailRef} type="email" placeholder="email" />
                    <input ref={passwordRef} type="password" placeholder="password" />
                    <input ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Signup
