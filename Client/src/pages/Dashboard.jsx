import React from 'react';
import {Avatar, Button, Card, Flex, Typography} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
    const {logout } = useAuth();

   
    return (
        <>
            <Button size="large" type="primary" className="profile-btn" onClick={logout}>Logout</Button>

        </>
    );
};

export default Dashboard;
