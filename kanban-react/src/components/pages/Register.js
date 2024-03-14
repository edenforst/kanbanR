// RegisterForm.js
import React, { useState } from 'react';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, role })
            });
            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout de l\'utilisateur.');
            }
            const data = await response.json();
            console.log('Utilisateur ajouté avec succès:', data);
            // Réinitialisation du formulaire ou autres actions nécessaires
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return (
        <form id="userForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Nom d'utilisateur:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label htmlFor="password">Mot de passe:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label htmlFor="role">Rôle:</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="scrum_master">Scrum Master</option>
                <option value="user">User</option>
            </select>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default RegisterForm;
