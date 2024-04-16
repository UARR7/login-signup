import { useAuth } from "../contexts/AuthContext.jsx";
import {message} from 'antd';
import { useState } from "react";
const useSignup = () => {
  const {login} = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const registerUser = async (values)=>{
    if(values.password !== values.passwordConfirm){
        return setError("Passwords are not the same");
    }
    try{
        setError(null);
        setLoading(true);
        const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),

        });

        const data = res.json();
        if(res.status===201) {
            message.success('User registered successfully');
            login(data.token, data.user);
        } else if (res.status === 400){
            message.error(data.message);
        }else{
            return setError('User Already Exists');
        }
    }catch(error){
        message.error('Registration Failed');
    }finally{
        setLoading(false);
    }
  };
  return {loading, error, registerUser};
};

export default useSignup;