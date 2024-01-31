const express = require('express');
const router = express.Router();

// Placeholder data for users (replace with actual database logic)
let users = [];

// Signup route
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Check if username is already taken
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    // Create a new user object
    const newUser = { username, password };
    // Add the new user to the users array (or save to database)
    users.push(newUser);
    // Return success response
    res.status(201).json({ message: 'User created successfully' });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Find user by username
    const user = users.find(user => user.username === username);
    // Check if user exists and password is correct
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    // Return success response
    res.status(200).json({ message: 'Login successful' });
});

// Logout route (not typically used with stateless JWT authentication)
router.post('/logout', (req, res) => {
    // Perform any logout logic (e.g., clearing session)
    // Return success response
    res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
