const { handleErrors } = require('../helpers/handleErrors');
const InscriptionFormation = require('../models/inscriptionFormation');
const Formation = require('../models/formation');
const Eleve = require('../models/eleve');

exports.getAll = async (_, res) => {
  const [err, inscriptions] = await handleErrors(InscriptionFormation.findAll());
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(inscriptions);
};

exports.getOne = async (req, res) => {
  const [err, inscription] = await handleErrors(InscriptionFormation.findByPk(req.params.id));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!inscription) {
    return res.status(404).json({ error: 'Inscription not found' });
  }
  res.status(200).json(inscription);
};

exports.getInscriptionsFormation = async (req, res) => {
  const [err, inscriptions] = await handleErrors(InscriptionFormation.findAll({
    where: { FormationId: req.params.id },
    include: [Formation, Eleve],
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(inscriptions);
};

exports.getInscriptions = async (req, res) => {
  const [err, inscriptions] = await handleErrors(InscriptionFormation.findAll({
    where: { EleveId: req.params.id },
    include: [Formation, Eleve],
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(inscriptions);
};

exports.create = async (req, res) => {
  const [err, inscription] = await handleErrors(InscriptionFormation.create(req.body));
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  res.status(201).json(inscription);
};

exports.update = async (req, res) => {
  const [findErr, inscription] = await handleErrors(InscriptionFormation.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!inscription) {
    return res.status(404).json({ error: 'Inscription not found' });
  }

  const [updateErr] = await handleErrors(inscription.update(req.body));
  if (updateErr) {
    return res.status(500).json({ error: updateErr.message });
  }
  res.status(200).json(inscription);
};

exports.delete = async (req, res) => {
  const [findErr, inscription] = await handleErrors(InscriptionFormation.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!inscription) {
    return res.status(404).json({ error: 'Inscription not found' });
  }

  const [deleteErr] = await handleErrors(inscription.destroy());
  if (deleteErr) {
    return res.status(500).json({ error: deleteErr.message });
  }
  res.status(204).json({});
};
