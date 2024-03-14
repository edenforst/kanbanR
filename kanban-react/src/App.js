import React, { useState } from 'react';
import LoginForm from './components/pages/Login';
import RegisterForm from './components/pages/Register';
import CardForm from './components/Board/BoardCard';
import BoardForm from './components/Board/Board';
import DragAndDrop from './components/pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Kanban</h1>
      {!isLoggedIn && (
        <div>
          <h2>Connexion</h2>
          <LoginForm onLogin={handleLogin} />
          <RegisterForm />
        </div>
      )}

      {isLoggedIn && (
        <div>
          <button onClick={handleLogout}>Déconnexion</button>
          <h2>Projet</h2>
          <DragAndDrop />
          <CardForm />
          <BoardForm />
        </div>
      )}
    </div>
  );
}

export default App;
