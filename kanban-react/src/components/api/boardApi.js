const API_URL = '/api/boards/';

// Créer un nouveau tableau
const createBoard = async (boardData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(boardData)
  });
  const data = await response.json();
  return data;
};

// Récupérer tous les tableaux
const getAllBoards = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

// Récupérer un tableau par son ID
const getBoardById = async (boardId) => {
  const response = await fetch(API_URL + boardId);
  const data = await response.json();
  return data;
};

// Mettre à jour un tableau existant
const updateBoard = async (boardId, boardData) => {
  const response = await fetch(API_URL + boardId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(boardData)
  });
  const data = await response.json();
  return data;
};

// Supprimer un tableau existant
const deleteBoard = async (boardId) => {
  const response = await fetch(API_URL + boardId, {
    method: 'DELETE'
  });
  const data = await response.json();
  return data;
};

export { createBoard, getAllBoards, getBoardById, updateBoard, deleteBoard };
