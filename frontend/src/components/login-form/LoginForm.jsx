import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { login } from '../../utils/api';

const LoginForm = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // State to track whether it's login or signup

    const handleLogin = (e) => {
        e.preventDefault();
        // Logic for login
        console.log("Logging in with:", email, password);
    }

    const handleSignup = (e) => {
        e.preventDefault();
        // Logic for signup
        console.log("Signing up with:", email, password);
    }

    return (
        <form className={styles.container}>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            {isLogin ? (
                <button onClick={handleLogin}>Login</button>
            ) : (
                <button onClick={handleSignup}>Sign Up</button>
            )}
            <p onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </p>
        </form>
    )
}

export default LoginForm;
