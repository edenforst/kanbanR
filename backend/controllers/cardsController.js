import Card from '../models/card.js';

// CREATE - Création d'une nouvelle carte
export const createCard = async (req, res) => {
    try {
        const newCard = new Card(req.body);
        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// READ - Récupérer toutes les cartes
export const getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ - Récupérer une carte par son ID
export const getCardById = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        card ? res.json(card) : res.status(404).json({ message: 'Carte non trouvée' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE - Mettre à jour une carte
export const updateCard = async (req, res) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE - Supprimer une carte
export const deleteCard = async (req, res) => {
    try {
        await Card.findByIdAndDelete(req.params.id);
        res.json({ message: 'Carte supprimée' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default { createCard, getAllCards, getCardById, updateCard, deleteCard};