import React, { useState, useEffect } from 'react';
import LoginForm from './components/pages/Login';
import RegisterForm from './components/pages/Register';
import CardForm from './components/Board/BoardCard';
import BoardForm from './components/Board/Board';
import DragAndDrop from './components/pages/Home';
import { createBoard, getAllBoards, getBoardById, updateBoard, deleteBoard } from './components/api/boardApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [boards, setBoards] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const fetchBoards = async () => {
      const response = await getAllBoards();
      setBoards(response.data);
    };

    fetchBoards();
  }, []);

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

      {isLoggedIn && boards.length > 0 && (
        <div>
          <button onClick={handleLogout}>Déconnexion</button>
          <h2>Projet</h2>
          <DragAndDrop boards={boards} />
          <CardForm />
          <BoardForm />
        </div>
      )}
    </div>
  );
}

export default App;
