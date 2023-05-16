const Sequelize = require('sequelize');
const InscriptionsFormations = require('../models/models')


// Routes pour toutes les Inscriptions aux formations

// obtenir toutes les inscriptions aux formations et utiliser try catch
exports.getAllInscriptionsFormations = async (req, res) => {
    const inscriptionsFormations = await InscriptionsFormations.findAll();
    res.json(inscriptionsFormations);
};

exports.createInscriptionFormation = async (req, res) => {
    const { id_formation, id_eleve, creee_le } = req.body;

    try {
        const newInscriptionFormation = await InscriptionsFormations.create({ id_formation, id_eleve, creee_le });
        res.status(201).json(newInscriptionFormation);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la création de l'inscription à la formation", error });
    }
};


// Routes pour une inscription via id_formation avec try catch
exports.getInscriptionFormationByIdFormation = async (req, res) => {
    const inscriptionFormation = await InscriptionsFormations.findByPk(req.params.id_formation);

    if (inscriptionFormation) {
        res.json(inscriptionFormation);
    } else {
        res.status(404).json({ message: "L'inscription à la formation n'a pas été trouvée" });
    }
};

exports.updateInscriptionFormationByIdFormation = async (req, res) => {
    const { id_eleve, creee_le } = req.body;
    const id_formation = req.params.id_formation;

    try {
        const [updatedRows] = await InscriptionsFormations.update({ id_formation, id_eleve, creee_le }, { where: { id_formation: id_formation } });

        if (updatedRows > 0) {
            res.status(200).json({ message: "L'inscription à la formation a bien été mise à jour" });
        } else {
            res.status(404).json({ message: "L'inscription à la formation n'a pas été trouvée" });
        }
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour de l'inscription à la formation", error });
    }
};

exports.deleteInscriptionFormationByIdFormation = async (req, res) => {
    const id_formation = req.params.id_formation;

    try {
        const deletedRows = await InscriptionsFormations.destroy({ where: { id_formation: id_formation } });

        if (deletedRows > 0) {
            res.status(200).json({ message: "L'inscription à la formation a bien été supprimée" });
        } else {
            res.status(404).json({ message: "L'inscription à la formation n'a pas été trouvée" });
        }
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la suppression de l'inscription à la formation", error });
    }
};

exports.getInscriptionFormationByIdEleve = async (req, res) => {
    const inscriptionFormation = await InscriptionsFormations.findByPk(req.params.id_eleve);

    if (inscriptionFormation) {
        res.json(inscriptionFormation);
    } else {
        res.status(404).json({ message: "L'inscription à la formation n'a pas été trouvée" });
    }
};

exports.updateInscriptionFormationByIdEleve = async (req, res) => {
    const { id_formation, creee_le } = req.body;
    const id_eleve = req.params.id_eleve;

    try {
        const [updatedRows] = await InscriptionsFormations.update({ id_formation, id_eleve, creee_le }, { where: { id_eleve: id_eleve } });

        if (updatedRows > 0) {
            res.status(200).json({ message: "L'inscription à la formation a bien été mise à jour" });
        } else {
            res.status(404).json({ message: "L'inscription à la formation n'a pas été trouvée" });
        }
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour de l'inscription à la formation", error });
    }
};

exports.deleteInscriptionFormationByIdEleve = async (req, res) => {
    const id_eleve = req.params.id_eleve;

    try {
        const deletedRows = await InscriptionsFormations.destroy({ where: { id_eleve: id_eleve } });

        if (deletedRows > 0) {
            res.status(200).json({ message: "L'inscription à la formation a bien été supprimée" });
        } else {
            res.status(404).json({ message: "L'inscription à la formation n'a pas été trouvée" });
        }
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la suppression de l'inscription à la formation", error });
    }
};

exports.getInscriptionFormationByDate = async (req, res) => {
    const inscriptionFormation = await InscriptionsFormations.findByPk(req.params.creee_le);

    if (inscriptionFormation) {
        res.json(inscriptionFormation);
    } else {
        res.status(404).json({ message: "L'inscription à la formation n'a pas été trouvée" });
    }
}


