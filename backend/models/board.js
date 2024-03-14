import mongoose from'mongoose';

const boardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    columns: [{ type: String }]
});

const Board = mongoose.model('Board', boardSchema);

export default Board;