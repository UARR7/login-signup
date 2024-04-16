import { Card, Typography, Input, Form, Flex, Button, Spin, Alert} from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import registerimage from "../assets/immm.gif";
import useLogin from '../hooks/useLogin';
const Login = () => {
    const {error, loading, loginUser} = useLogin();
    const handleLogin = async (values)=>{
        await loginUser(values);
    };

    return (
        <Card className='form-container'>
        <Flex gap="large" align='center'>
            <Flex flex={1}>
                <img src={registerimage} className='auth-image'/>
            </Flex>
            <Flex vertical flex={1}>
                <Typography.Title level={3} strong className='title'>
                    Sign In
                </Typography.Title>
                <Typography.Title level={1} type="secondary" strong className='slogan'>
                    Unlock your world
                </Typography.Title>
                <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                            {
                                type: 'email',
                                message: 'Please input correct email address',
                            }
                        ]}
                    >
                        <Input size="large" placeholder="Enter your email" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                
                                required: true,
                                message: 'Please input your Password!',
                            },
                            {
                            
                                type: 'password',
                                message: 'Please input correct password',
                                
                            },
                           
                        ]}
                    >
                        <Input.Password size="large" placeholder="Enter your password" />
                    </Form.Item>
                    

                    {
                        error && <Alert description={error} type="error" showIcon closable className='alert'/>
                    }
                    <Form.Item>
                        <Button 
                            type={`${loading ? '' : 'primary'}`}
                            htmlType="submit" 
                            size="large" 
                            className="btn">{loading ? <Spin/> : 'Sign In'}</Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to="/">
                            <Button size="large" className='btn'>Create an Account</Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Flex>
        </Flex>
        
      </Card>
    );
};

export default Login;