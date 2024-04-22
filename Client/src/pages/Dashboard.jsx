import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './db.css';
const Dashboard = () => {
    const { logout } = useAuth();

    return (
        <>  
            <div>
                <Link to="/portal">
                    <button type="primary">Portal</button>
                </Link>
            </div>
            <div>
                <Link to="/disc">
                    <button type="primary">Forum Portal</button>
                </Link>
            </div>
            <div>
                <Button size="large" type="primary" className="profile-btn" onClick={logout}>Logout</Button>
            </div>
        </>
    );
};

export default Dashboard;

