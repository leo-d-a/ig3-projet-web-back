const bcrypt = require('bcrypt');
const { handleErrors } = require('../helpers/handleErrors');
const Utilisateur = require('../models/utilisateur');
const Eleve = require('../models/eleve');
const Patient = require('../models/patient');

exports.getAll = async (_, res) => {
  const [err, utilisateurs] = await handleErrors(Utilisateur.findAll());
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(utilisateurs);
};

exports.getOne = async (req, res) => {
  const [err, utilisateur] = await handleErrors(Utilisateur.findByPk(req.params.id));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!utilisateur) {
    return res.status(404).json({ error: 'Utilisateur not found' });
  }
  res.status(200).json(utilisateur);
};

exports.getEleve = async (req, res) => {
  const [err, eleve] = await handleErrors(Eleve.findOne({ where: { UtilisateurUtilisateurId: req.params.id } }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }
  res.status(200).json(eleve);
};

exports.getPatient = async (req, res) => {
  const [err, patient] = await handleErrors(Patient.findOne({ where: { UtilisateurUtilisateurId: req.params.id } }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }
  res.status(200).json(patient);
};

exports.create = async (req, res) => {
  const { nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin } = req.body;
  const [createErr, utilisateur] = await handleErrors(
    Utilisateur.create({ nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin })
  );
  if (createErr) {
    return res.status(400).json({ error: createErr.message });
  }
  res.status(201).json(utilisateur);
};

exports.update = async (req, res) => {
  const [findErr, utilisateur] = await handleErrors(Utilisateur.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!utilisateur) {
    return res.status(404).json({ error: 'Utilisateur not found' });
  }

  const { nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin } = req.body;
  const [updateErr] = await handleErrors(utilisateur.update({ nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin }));
  if (updateErr) {
    return res.status(500).json({ error: updateErr.message });
  }
  res.status(200).json(utilisateur);
};

exports.delete = async (req, res) => {
  const [findErr, utilisateur] = await handleErrors(Utilisateur.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!utilisateur) {
    return res.status(404).json({ error: 'Utilisateur not found' });
  }

  const [deleteErr] = await handleErrors(utilisateur.destroy());
  if (deleteErr) {
    return res.status(500).json({ error: deleteErr.message });
  }
  res.status(204).json({});
};
