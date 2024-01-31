// AuthForm.jsx
import React, { useState } from 'react';

const AuthForm = ({ onSubmit, isSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">{isSignup ? 'Sign Up' : 'login'}</button>
        </form>
    );
}

export default AuthForm;
