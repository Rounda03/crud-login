import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Input = styled.input`
    margin: 10px;
    padding: 10px;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);
            if (response.data.length > 0) {
                alert('Login successful!');
                navigate('/');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <LoginContainer>
            <h2>Login</h2>
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
        </LoginContainer>
    );
};

export default Login;
