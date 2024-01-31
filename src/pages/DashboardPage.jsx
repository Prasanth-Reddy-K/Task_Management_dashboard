// DashboardPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import TaskDragDrop from '../components/TaskDragDrop';

const DashboardPage = () => {
    const [tasks, setTasks] = useState([]);
           <h1>dfghbvc</h1>
    // Fetch tasks from the server when the component mounts
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('mongodb://localhost:27017');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    // Function to handle task deletion
    const handleDeleteTask = async (taskId) => {
        try {
            await axios.delete(`http://localhost:5000/Task/${taskId}`);
            setTasks(tasks.filter(task => task._id !== taskId)); // Remove the deleted task from state
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    // Function to handle task reordering
    const handleDragEnd = (result) => {
        if (!result.destination) return; // If dropped outside the list, do nothing

        const reorderedTasks = Array.from(tasks);
        const [removed] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, removed);

        setTasks(reorderedTasks);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <TaskList tasks={tasks} onDelete={handleDeleteTask} />
            <TaskDragDrop tasks={tasks} onDragEnd={handleDragEnd} />
        </div>
    );
}

export default DashboardPage;
