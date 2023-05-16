const { Avis } = require('../models/models');

// Obtenir tous les avis
const getAllAvis = async (req, res) => {
    try {
        const avis = await Avis.findAll();
        res.json(avis);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createAvis = async (req, res) => {
    try {
        const avis = await Avis.create(req.body);
        res.status(201).json(avis);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAvisById = async (req, res) => {
    try {
        const avis = await Avis.findByPk(req.params.id);
        if (avis) {
            res.json(avis);
        } else {
            res.status(404).json({ error: 'Avis non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateAvisById = async (req, res) => {
    try {
        const avis = await Avis.findByPk(req.params.id);
        if (avis) {
            await avis.update(req.body);
            res.json(avis);
        } else {
            res.status(404).json({ error: 'Avis non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteAvisById = async (req, res) => {
    try {
        const avis = await Avis.findByPk(req.params.id);
        if (avis) {
            await avis.destroy();
            res.sendStatus(204);
        } else {
            res.status(404).json({ error: 'Avis non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAvisByIdEleve = async (req, res) => {
    try {
        const avis = await Avis.findAll({
            where: {
                id_eleve: req.params.id_eleve
            }
        });
        if (avis) {
            res.json(avis);
        } else {
            res.status(404).json({ error: 'Avis non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAvisByIdFormation = async (req, res) => {
    try {
        const avis = await Avis.findAll({
            where: {
                id_formation: req.params.id_formation
            }
        });
        if (avis) {
            res.json(avis);
        } else {
            res.status(404).json({ error: 'Avis non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { 
    getAllAvis,
    createAvis,
    getAvisById,
    updateAvisById,
    deleteAvisById,
    getAvisByIdEleve,
    getAvisByIdFormation
};






