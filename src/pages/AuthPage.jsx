// AuthPage.jsx

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

import { signup, login } from '../services/authService';

const AuthPage = ({ isSignup }) => {
    const [error, setError] = useState('');
    // const history = useHistory();

    const handleSubmit = async (credentials) => {
        try {
            setError('');
            if (isSignup) {
                await signup(credentials);
            } else {
                await login(credentials);
            }
            // Redirect to dashboard upon successful authentication
            // history.push('/dashboard');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
            {error && <p>{error}</p>}
            <AuthForm onSubmit={handleSubmit} isSignup={isSignup} />
        </div>
    );
}

export default AuthPage;
