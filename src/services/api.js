// api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Adjust this URL according to your backend server configuration

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to fetch all tasks
export const fetchTasks = async () => {
    try {
        const response = await api.get('/tasks');
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

// Function to create a new task
export const createTask = async (taskData) => {
    try {
        const response = await api.post('/tasks', taskData);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

// Function to delete a task
export const deleteTask = async (taskId) => {
    try {
        await api.delete(`/tasks/${taskId}`);
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};

// Export other API functions as needed

export default api;
