// Login.js
import React, { useState } from 'react';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (!response.ok) {
                throw new Error('Failed to login');
            }
            const data = await response.json();
            const token = data.token;
            localStorage.setItem('token', token);
            console.log(username, 'est connecté');
            // Appeler la fonction onLogin pour indiquer que l'utilisateur s'est connecté avec succès
            onLogin();
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    return (
        <form id="loginForm" onSubmit={handleLogin}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
