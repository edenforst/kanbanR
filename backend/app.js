import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import join from 'path';

import usersRouter from './routes/users.js';
import cardsRouter from './routes/cards.js';
import boardsRouter from './routes/boards.js';

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000', // Autoriser uniquement les requêtes provenant de ce domaine
    methods: ['GET', 'POST'], // Autoriser uniquement certaines méthodes HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // Autoriser uniquement certains en-têtes
    credentials: true, // Autoriser les cookies et les en-têtes d'autorisation
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/boards', boardsRouter);

app.use(express.static('frontend/public'));
// app.get('/', (req, res) => {
//     res.sendFile(join('public', './kanban-react/frontend/public/index.html'));
// });

// connect db then start server
(async () => {
try {
    await mongoose.connect('mongodb://localhost:27017/Kanban'); //changer en 'mongodb://mongo:27018/Kanban' pour docker
    app.listen(port, () => console.log(`App started at: http://localhost:${port}`));
    console.log(`Connecté a MongoDB`);
} catch(error) {
    console.error(error);
    process.exit(1);
}
})();



