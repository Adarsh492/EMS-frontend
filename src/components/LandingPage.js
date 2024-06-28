// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToRegister = () => {
        navigate('/register');
    };

    return (
        <div className="landing-page">
            <h1>Welcome</h1>
            <h1>To</h1>
            <h1>Employee Portal</h1>
            <div className="buttons">
                <button onClick={navigateToLogin}>Login</button>
                <button onClick={navigateToRegister}>Register</button>
            </div>
        </div>
    );
}

export default LandingPage;
