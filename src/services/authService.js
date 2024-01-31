// authService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Adjust this URL according to your backend server configuration

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to sign up a new user
export const signup = async (userData) => {
    try {
        const response = await api.post('/signup', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to log in an existing user
export const login = async (userData) => {
    try {
        const response = await api.post('/login', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
