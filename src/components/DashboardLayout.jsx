// DashboardLayout.jsx
import React from 'react';
import './DashboardLayout.css';

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            {/* Dashboard components */}
            <h2>Welcome to the Dashboard!</h2>
            <div className="widget">
                <h3>Widget 1</h3>
                <p>Content for Widget 1...</p>
            </div>
            <div className="widget">
                <h3>Widget 2</h3>
                <p>Content for Widget 2...</p>
            </div>
        </div>
    );
}

export default DashboardLayout;
