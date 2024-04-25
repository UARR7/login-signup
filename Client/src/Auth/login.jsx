import { Card, Typography, Input, Form, Flex, Button, Spin, Alert} from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import registerimage from "../assets/imm.gif";
import useLogin from '../hooks/useLogin';
import "./fill.css";
const Login = () => {
    const {error, loading, loginUser} = useLogin();
    const handleLogin = async (values)=>{
        await loginUser(values);
    };

    return (
        <box className="body">
        <Card className='form-containerl'>
        <Flex gap="large" align='center'>
            <Flex flex={1}>
                <img src={registerimage} className='auth-imagel'/>
            </Flex>
            <Flex vertical flex={1}>
                <Typography.Title level={2} strong className='titlel' style={{ color: 'black', textShadow: '2px', marginBottom:'3px' }}>
                    Sign In
                </Typography.Title>
                <Typography.Title level={1}  strong className='sloganl' style={{ color: 'grey', textShadow: '2px' }} >
                    Let's heal together!
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
                            className="btncl">{loading ? <Spin/> : 'Sign In'}</Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to="/">
                            <Button size="large" className='btncs'>Create an Account</Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Flex>
        </Flex>
        
      </Card>
      </box>
    );
};

export default Login;