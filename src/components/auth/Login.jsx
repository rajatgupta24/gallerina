import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const emailRef = useRef();
    const { login } = useAuth();
    const history = useHistory();
    const passwordRef = useRef();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            console.log("eror")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <div>
                    <input ref={emailRef} type="email" placeholder="email" />
                    <input ref={passwordRef} type="password" placeholder="password" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Login;
