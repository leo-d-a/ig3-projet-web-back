const handleErrors = require('../helpers/handleErrors');
const Eleve = require('../models/eleve');

exports.createEleve = async (req, res) => {
  const [err, eleve] = await handleErrors(Eleve.create(req.body));
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  res.status(201).json(eleve);
};

exports.getEleves = async (_, res) => {
  const [err, eleves] = await handleErrors(Eleve.findAll());
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(eleves);
};

exports.getEleveById = async (req, res) => {
  const [err, eleve] = await handleErrors(Eleve.findByPk(req.params.id));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }
  res.status(200).json(eleve);
};

exports.updateEleve = async (req, res) => {
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

exports.deleteEleve = async (req, res) => {
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
