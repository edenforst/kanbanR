import express from "express";
import usersController from '../controllers/usersController.js';

const router = express.Router();

// Routes pour les utilisateurs
router.post('/login', usersController.loginUser);
router.post('/', usersController.createUser);
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

export default router;