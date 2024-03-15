import express from "express";
import boardsController from '../controllers/boardsController.js';

const router = express.Router();

// Routes pour les tableaux
router.post('/', boardsController.createBoard);
router.get('/', boardsController.getAllBoards);
router.get('/:id', boardsController.getBoardById);
router.put('/:id', boardsController.updateBoard);
router.delete('/:id', boardsController.deleteBoard);

export default router;