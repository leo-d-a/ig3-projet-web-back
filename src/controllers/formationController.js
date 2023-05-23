const handleErrors = require('../helpers/handleErrors');
const Formation = require('../models/formation');

exports.createFormation = async (req, res) => {
  const [err, formation] = await handleErrors(Formation.create(req.body));
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  res.status(201).json(formation);
};

exports.getFormations = async (_, res) => {
  const [err, formations] = await handleErrors(Formation.findAll());
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(formations);
};

exports.getFormationById = async (req, res) => {
  const [err, formation] = await handleErrors(Formation.findByPk(req.params.id));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!formation) {
    return res.status(404).json({ error: 'Formation not found' });
  }
  res.status(200).json(formation);
};

exports.updateFormation = async (req, res) => {
  const [findErr, formation] = await handleErrors(Formation.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!formation) {
    return res.status(404).json({ error: 'Formation not found' });
  }

  const [updateErr] = await handleErrors(formation.update(req.body));
  if (updateErr) {
    return res.status(500).json({ error: updateErr.message });
  }
  res.status(200).json(formation);
};

exports.deleteFormation = async (req, res) => {
  const [findErr, formation] = await handleErrors(Formation.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!formation) {
    return res.status(404).json({ error: 'Formation not found' });
  }

  const [deleteErr] = await handleErrors(formation.destroy());
  if (deleteErr) {
    return res.status(500).json({ error: deleteErr.message });
  }
  res.status(204).json({});
};
