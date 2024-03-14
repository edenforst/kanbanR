import mongoose from'mongoose';

const cardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    // column: { type: String, required: true }, // Colonnes dans lesquelles la carte est placée
    boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true } // Référence au tableau auquel appartient la carte
    // Vous pouvez ajouter d'autres champs en fonction de vos besoins
});

const Card = mongoose.model('Card', cardSchema);

export default Card;
