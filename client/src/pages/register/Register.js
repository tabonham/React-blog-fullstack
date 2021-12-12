import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..." />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" className="registerInput" />
                <button className="registerButton">Login</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link></button>
            
        </div>
    )
}
