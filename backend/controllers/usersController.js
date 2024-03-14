import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// LOGIN - Connexion d'un utilisateur
export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Rechercher l'utilisateur dans la base de données par nom d'utilisateur
        const user = await User.findOne({ username });

        // Vérifier si l'utilisateur existe
        if (!user) {
            return res.status(400).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }

        // Vérifier si le mot de passe est correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }

        // Générer un jeton JWT pour l'utilisateur
        const token = jwt.sign({ userId: user._id, username: user.username }, 'your_secret_key', { expiresIn: '10m' });

        // Renvoyer le jeton JWT au client
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion' });
    }
};

// CREATE - Création d'un nouvel utilisateur
export const createUser = async (req, res) => {
    try {

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role,
        });

        // Sauvegarder l'utilisateur dans la base de données
        const savedUser = await newUser.save();
        console.log("Utilisateur créé avec succès", savedUser);

        res.status(201).json(newUser); // Répondre avec l'utilisateur créé
    } catch (error) {
        res.status(400).json({ message: error.message }); // Répondre en cas d'erreur
    }
};



// READ - Récupérer tous les utilisateurs
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ - Récupérer un utilisateur par son ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE - Mettre à jour un utilisateur
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE - Supprimer un utilisateur par ID
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export default { loginUser, createUser, getAllUsers, getUserById, updateUser, deleteUser };