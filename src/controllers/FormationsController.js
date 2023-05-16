const Sequelize = require('sequelize');
const Formations = require('../models/models')

exports.getAllFormations = async (req, res) => {
    const formations = await Formations.findAll();
    res.json(formations);
};

exports.getFormationById = async (req, res) => {
    const formation = await Formations.findByPk(req.params.id_formation);

    if (formation) {
        res.json(formation);
    } else {
        res.status(404).json({ message: "La formation n'a pas été trouvée" });
    }
};

exports.createFormation = async (req, res) => {
    const { libelle, description, date_debut, date_fin, prix, nb_places } = req.body;

    try {
        const newFormation = await Formations.create({ libelle, description, date_debut, date_fin, prix, nb_places });
        res.status(201).json(newFormation);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la création de la formation', error });
    }
};

exports.updateFormationById = async (req, res) => {
    const { libelle, description, date_debut, date_fin, prix, nb_places } = req.body;
    const id_formation = req.params.id;

    try {
        const [updatedRows] = await Formations.update({ libelle, description, date_debut, date_fin, prix, nb_places, est_deplacee, est_annulee }, { where: { id: id_formation } });

        if (updatedRows > 0) {
            res.status(200).json({ message: 'La formation a bien été mis à jour' });
        } else {
            res.status(404).json({ message: "La formation n'a pas été trouvée" });
        }
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la mise à jour de la formation', error });
    }
};

exports.deleteFormationById = async (req, res) => {
    const id_formation = req.params.id;

    try {
        const deletedRows = await Book.destroy({ where: { id: id_formation } });

        if (deletedRows > 0) {
            res.status(200).json({ message: 'La formation a bien été supprimée' });
        } else {
            res.status(404).json({ message: "La formation n'a pas été trouvée" });
        }
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la suppression de la formation', error });
    }
};

//getFormationsByLibelle avec try catch

exports.getFormationsByLibelle = async (req, res) => {
    const libelle = req.params.libelle;

    try {
        const formations = await Formations.findAll({ where: { libelle: libelle } });
        res.json(formations);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la récupération des formations', error });
    }
};

//getFormationsByCompetences avec try catch

exports.getFormationsByCompetences = async (req, res) => {
    const competences = req.params.competences;

    try {
        const formations = await Formations.findAll({ where: { competences: competences } });
        res.json(formations);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la récupération des formations', error });
    }
};

//updateDeplaceeById avec try catch

exports.updateDeplaceeById = async (req, res) => {
    const id_formation = req.params.id;
    const { est_deplacee } = req.body;

    try {
        const [updatedRows] = await Formations.update({ est_deplacee }, { where: { id: id_formation } });

        if (updatedRows > 0) {
            res.status(200).json({ message: 'La formation a bien été mis à jour' });
        } else {
            res.status(404).json({ message: "La formation n'a pas été trouvée" });
        }
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la mise à jour de la formation', error });
    }
};

//updateAnnuleeById 

exports.updateAnnuleeById = async (req, res) => {
    const id_formation = req.params.id;
    const { est_annulee } = req.body;

    try {
        const [updatedRows] = await Formations.update({ est_annulee }, { where: { id: id_formation } });

        if (updatedRows > 0) {
            res.status(200).json({ message: 'La formation a bien été mis à jour' });
        } else {
            res.status(404).json({ message: "La formation n'a pas été trouvée" });
        }
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la mise à jour de la formation', error });
    }
}