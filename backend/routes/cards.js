import express from "express";
import cardsController from '../controllers/cardsController.js';

const router = express.Router();

// Routes pour les cartes
router.post('/', cardsController.createCard);
router.get('/', cardsController.getAllCards);
router.get('/:id', cardsController.getCardById);
router.put('/:id', cardsController.updateCard);
router.delete('/:id', cardsController.deleteCard);

export default router;
