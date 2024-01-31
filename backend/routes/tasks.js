// routes/tasks.js
const express = require('express');
const router = express.Router();

// Placeholder data for tasks (replace with actual database logic)
let tasks = [];

// GET all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// POST a new task
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newTask = { id: tasks.length + 1, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT (update) an existing task
router.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description } = req.body;
    // Find the task by id
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        // Update the task
        tasks[taskIndex] = { ...tasks[taskIndex], title, description };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// DELETE a task by id
router.delete('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    // Filter out the task to be deleted
    tasks = tasks.filter(task => task.id !== taskId);
    res.status(204).end();
});

module.exports = router;
