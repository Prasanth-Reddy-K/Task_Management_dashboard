// authenticate.js

const jwt = require('jsonwebtoken');

// Middleware function to authenticate JWT tokens
const authenticate = (req, res, next) => {
    // Get the JWT token from the request headers
    const token = req.headers.authorization;

    // Check if token is present
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user information to the request object
        req.user = decoded.user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Return an error response if token is invalid
        return res.status(401).json({ message: 'Invalid authorization token' });
    }
};

module.exports = authenticate;
