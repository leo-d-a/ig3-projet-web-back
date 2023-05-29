const bcrypt = require('bcrypt');
const Utilisateur = require('../models/utilisateur');
const Eleve = require('../models/eleve');
const Patient = require('../models/patient');

exports.getAll = async (_, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll();
    res.status(200).json(utilisateurs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur not found' });
    }
    res.status(200).json(utilisateur);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getEleve = async (req, res) => {
  try {
    const eleve = await Eleve.findOne({ where: { UtilisateurUtilisateurId: req.params.id } });
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }
    res.status(200).json(eleve);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { UtilisateurUtilisateurId: req.params.id } });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const { nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin } = req.body;
  try {
    const utilisateur = await Utilisateur.create({ nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin });
    res.status(201).json(utilisateur);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur not found' });
    }
    const { nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin } = req.body;
    await utilisateur.update({ nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin });
    res.status(200).json(utilisateur);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur not found' });
    }
    await utilisateur.destroy();
    res.status(204).json({});
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
