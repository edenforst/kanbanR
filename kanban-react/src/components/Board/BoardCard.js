import React, { useState } from 'react';

function CardForm() {
    const [cardTitle, setCardTitle] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const [cardColumn, setCardColumn] = useState('To Do');
    const [boardId, setBoardId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http:localhost:3001/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cardTitle, cardDescription, cardColumn, boardId })
            });
            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout de la carte.');
            }
            const data = await response.json();
            console.log('Carte ajoutée avec succès:', data);
            // Réinitialisation du formulaire ou autres actions nécessaires
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return (
        <form id="cardForm" onSubmit={handleSubmit}>
            <label htmlFor="cardTitle">Titre de la carte:</label>
            <input type="text" id="cardTitle" value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} required />
            <label htmlFor="cardDescription">Description:</label>
            <textarea id="cardDescription" value={cardDescription} onChange={(e) => setCardDescription(e.target.value)}></textarea>
            <label htmlFor="cardColumn">Colonne:</label>
            <select id="cardColumn" value={cardColumn} onChange={(e) => setCardColumn(e.target.value)}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <label htmlFor="boardId">ID du tableau:</label>
            <input type="text" id="boardId" value={boardId} onChange={(e) => setBoardId(e.target.value)} required />
            <button type="submit">Ajouter une carte 🎫</button>
        </form>
    );
}

export default CardForm;