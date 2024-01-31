// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <Router>

      <div className="app-container">
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<AuthPage isSignup={false} />} />
          <Route path="/signup" element={<AuthPage isSignup={true} />} />
          {/* Add more routes as needed */}
          <Route path="/" element={<DashboardPage />} />
            {/* Redirect to dashboard or login page based on authentication status */}
            {/* Implement authentication logic here */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
