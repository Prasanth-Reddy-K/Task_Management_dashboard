// AuthPage.jsx
import React from 'react';
import AuthForm from './AuthForm';

const AuthPage = ({ onAuth, isSignup }) => {
    const handleAuth = (credentials) => {
        onAuth(credentials);
    };

    return (
        <div>
            <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
            <AuthForm onSubmit={handleAuth} isSignup={isSignup} />
        </div>
    );
}

export default AuthPage;
