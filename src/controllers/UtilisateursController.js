const { Utilisateur } = require('../models/models');

// Obtenir tous les utilisateurs
const getAllUtilisateurs = async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.findAll();
        res.json(utilisateurs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const createUtilisateur = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.create(req.body);
        res.status(201).json(utilisateur);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUtilisateurById = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (utilisateur) {
            res.json(utilisateur);
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateUtilisateurById = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (utilisateur) {
            await utilisateur.update(req.body);
            res.json(utilisateur);
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteUtilisateurById = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (utilisateur) {
            await utilisateur.destroy();
            res.sendStatus(204);
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllUtilisateurs,
    createUtilisateur,
    getUtilisateurById,
    updateUtilisateurById,
    deleteUtilisateurById
}
