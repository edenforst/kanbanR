import Board from '../models/board.js';

// CREATE - Création d'un nouveau tableau
export const createBoard = async (req, res) => {
    try {
        const newBoard = new Board(req.body);
        const savedBoard = await newBoard.save();
        res.status(201).json(savedBoard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// READ - Récupérer tous les tableaux
export const getAllBoards = async (req, res) => {
    try {
        const boards = await Board.find();
        res.json(boards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ - Récupérer un tableau par son ID
export const getBoardById = async (req, res) => {
    try {
        const board = await Board.findById(req.params.id);
        board ? res.json(board) : res.status(404).json({ message: 'Tableau non trouvé' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE - Mettre à jour un tableau
export const updateBoard = async (req, res) => {
    try {
        const updatedBoard = await Board.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBoard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE - Supprimer un tableau
export const deleteBoard = async (req, res) => {
    try {
        await Board.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tableau supprimé' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default { createBoard, getAllBoards, getBoardById, updateBoard, deleteBoard };