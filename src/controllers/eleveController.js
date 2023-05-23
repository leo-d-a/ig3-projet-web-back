const { handleErrors } = require('../helpers/handleErrors');
const Eleve = require('../models/eleve');
const Utilisateur = require('../models/utilisateur');

exports.getAll = async (_, res) => {
  const [err, eleves] = await handleErrors(Eleve.findAll({
    include: [Utilisateur]
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(eleves);
};

exports.getOne = async (req, res) => {
  const [err, eleve] = await handleErrors(Eleve.findByPk(req.params.id, {
    include: [Utilisateur]
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }
  res.status(200).json(eleve);
};

exports.getUtilisateur = async (req, res) => {
  const [err, eleve] = await handleErrors(Eleve.findByPk(req.params.id, {
    include: [Utilisateur]
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }
  res.status(200).json(eleve.Utilisateur);
};

exports.getFormations = async (req, res) => {
  const [err, eleve] = await handleErrors(Eleve.findByPk(req.params.id, {
    include: ['Formations']
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }
  res.status(200).json(eleve.Formations);
};

exports.getAvis = async (req, res) => {
  const [err, eleve] = await handleErrors(Eleve.findByPk(req.params.id, {
    include: ['Avis']
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }
  res.status(200).json(eleve.Avis);
};

exports.create = async (req, res) => {
  const [err, eleve] = await handleErrors(Eleve.create(req.body));
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  res.status(201).json(eleve);
};

exports.update = async (req, res) => {
  const [findErr, eleve] = await handleErrors(Eleve.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }

  const [updateErr] = await handleErrors(eleve.update(req.body));
  if (updateErr) {
    return res.status(500).json({ error: updateErr.message });
  }
  res.status(200).json(eleve);
};

exports.delete = async (req, res) => {
  const [findErr, eleve] = await handleErrors(Eleve.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }

  const [deleteErr] = await handleErrors(eleve.destroy());
  if (deleteErr) {
    return res.status(500).json({ error: deleteErr.message });
  }
  res.status(204).json({});
};
