import React, { useState } from 'react';

function BoardForm() {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardDescription, setBoardDescription] = useState('');
    const [boardColumns, setBoardColumns] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http:localhost:3001/boards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ boardTitle, boardDescription, boardColumns })
            });
            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout du tableau.');
            }
            const data = await response.json();
            console.log('Tableau ajouté avec succès:', data);
            // Réinitialisation du formulaire ou autres actions nécessaires
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return (
        <form id="boardForm" onSubmit={handleSubmit}>
            <label htmlFor="boardTitle">Titre du tableau:</label>
            <input type="text" id="boardTitle" value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)} required />
            <label htmlFor="boardDescription">Description:</label>
            <textarea id="boardDescription" value={boardDescription} onChange={(e) => setBoardDescription(e.target.value)}></textarea>
            <label htmlFor="boardColumns">Colonnes:</label>
            <input type="text" id="boardColumns" value={boardColumns} onChange={(e) => setBoardColumns(e.target.value)} required />
            <button type="submit">Ajouter un tableau 📝</button>
        </form>
    );
}

export default BoardForm;