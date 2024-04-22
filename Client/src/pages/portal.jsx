import React from 'react';
import {Avatar, Button, Card, Flex, Typography} from 'antd';
import { useAuth } from '../contexts/AuthContext';
import './p.css';

const Portal = () => {
const {logout } = useAuth();
  return (
    <>
      <div>
        <h1>hi</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quos, delectus dolor consectetur dignissimos non impedit praesentium dolorum consequatur qui, recusandae, voluptate molestias odio laboriosam porro nostrum quisquam quas dolores.</p>
      </div>
      <div>
        <h1>hi</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quos, delectus dolor consectetur dignissimos non impedit praesentium dolorum consequatur qui, recusandae, voluptate molestias odio laboriosam porro nostrum quisquam quas dolores.</p>
      </div>
      <div>
        <h1>hi</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quos, delectus dolor consectetur dignissimos non impedit praesentium dolorum consequatur qui, recusandae, voluptate molestias odio laboriosam porro nostrum quisquam quas dolores.</p>
      </div>
      <div>
        <h1>hi</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quos, delectus dolor consectetur dignissimos non impedit praesentium dolorum consequatur qui, recusandae, voluptate molestias odio laboriosam porro nostrum quisquam quas dolores.</p>
      </div>
      <div>
        <h1>hi</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quos, delectus dolor consectetur dignissimos non impedit praesentium dolorum consequatur qui, recusandae, voluptate molestias odio laboriosam porro nostrum quisquam quas dolores.</p>
      </div>
      <div>
            <Button size="large" type="primary" className="profile-btn" onClick={logout}>Logout</Button>
      </div>
    </>
  );
};

export default Portal;
