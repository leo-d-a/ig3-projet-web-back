const handleErrors = require('../helpers/handleErrors');
const Utilisateur = require('../models/utilisateur');
const Eleve = require('../models/eleve');
const Patient = require('../models/patient');

exports.getAll = async (req, res) => {
    const [err, utilisateurs] = await handleErrors(Utilisateur.findAll());
    if (err) {
        res.status(500).json({ error: err.message });
    }
    res.json(utilisateurs);
};

exports.getOne = async (req, res) => {
    const [err, utilisateur] = await handleErrors(Utilisateur.findOne({ where: { utilisateurId: req.params.id } }));
    if (err) {
        res.status(500).json({ error: err.message });
    }
    res.json(utilisateur);
};

exports.create = async (req, res) => {
    const [err, utilisateur] = await handleErrors(Utilisateur.create(req.body));
    if (err) {
        res.status(400).json({ error: err.message });
    }
    res.status(201).json(utilisateur);
};

exports.update = async (req, res) => {
    const [err, utilisateur] = await handleErrors(Utilisateur.update(req.body, { where: { utilisateurId: req.params.id } }));
    if (err) {
        res.status(400).json({ error: err.message });
    }
    res.json(utilisateur);
};

exports.delete = async (req, res) => {
    const [err, utilisateur] = await handleErrors(Utilisateur.destroy({ where: { utilisateurId: req.params.id } }));
    if (err) {
        res.status(500).json({ error: err.message });
    }
    res.json(utilisateur);
};

// Spécifique: Obtenir le profil d'élève d'un utilisateur
exports.getEleve = async (req, res) => {
    const [err, eleve] = await handleErrors(Eleve.findOne({ where: { utilisateurId: req.params.id } }));
    if (err) {
        res.status(500).json({ error: err.message });
    }
    res.json(eleve);
};

// Spécifique: Obtenir le profil de patient d'un utilisateur
exports.getPatient = async (req, res) => {
    const [err, patient] = await handleErrors(Patient.findOne({ where: { utilisateurId: req.params.id } }));
    if (err) {
        res.status(500).json({ error: err.message });
    }
    res.json(patient);
};
