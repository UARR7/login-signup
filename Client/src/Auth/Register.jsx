import { Card, Typography, Input, Form, Flex, Button, Spin, Alert} from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import registerimage from "../assets/immm.gif";
import useSignup from "../hooks/useSignup";


const Register = () => {
    const {loading,error, registerUser} = useSignup();
    const handleRegister = (values) => {
        registerUser(values);
    };

    return (
      <Card className='form-container'>
        <Flex gap="large" align='center'>
            <Flex vertical flex={1}>
                <Typography.Title level={3} strong className='title'>
                    Create a new account
                </Typography.Title>
                <Typography.Title type="secondary" strong className='slogan'>
                    Join for exclusive access!
                </Typography.Title>
                <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
                    <Form.Item
                        label="Full Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Enter your Full Name" />
                    </Form.Item>
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
                           
                        ]}
                    >
                        <Input.Password size="large" placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="passwordConfirm"
                        rules={[
                            {
                                required: true,
                                message: 'Confirm your Password!',
                            },
                           
                        ]}
                    >
                        <Input.Password size="large" placeholder="Re-Enter your password" />
                    </Form.Item>

                    {
                        error && (<Alert description={error} type="error" showIcon closable className='alert'/>)
                    }
                    <Form.Item>
                        <Button 
                            type={`${loading ? '' : 'primary'}`}
                            htmlType="submit" 
                            size="large" 
                            className="btn">{loading ? <Spin/> : 'Create Account'}</Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to="./login">
                            <Button size="large" className='btn'>Sign In</Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Flex>
            <Flex flex={1}>
                <img src={registerimage} className='auth-image'/>
            </Flex>
        </Flex>
        
      </Card>
    );
};

export default Register;


