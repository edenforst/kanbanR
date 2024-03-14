import React, { useState } from 'react';

function LoginForm() {
  // États pour stocker les valeurs des champs de formulaire
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Envoi des données du formulaire au serveur
    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Échec de la connexion');
      }

      // Réinitialiser les champs du formulaire après une connexion réussie
      setUsername('');
      setPassword('');

      // Gérer la réponse du serveur après une connexion réussie
      const data = await response.json();
      console.log('Connexion réussie ! Token reçu :', data.token);

      // Redirection vers une autre page ou mise à jour de l'état de l'application
    } catch (error) {
      console.error('Erreur lors de la connexion :', error.message);
      // Afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nom d'utilisateur :</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LoginForm;