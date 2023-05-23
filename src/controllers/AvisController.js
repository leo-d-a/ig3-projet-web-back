const handleErrors = require('../helpers/handleErrors');
const Avis = require('../models/avis');

exports.createAvis = async (req, res) => {
  const [err, avis] = await handleErrors(Avis.create(req.body));
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  res.status(201).json(avis);
};

exports.getAvis = async (_, res) => {
  const [err, avis] = await handleErrors(Avis.findAll());
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(avis);
};

exports.getAvisById = async (req, res) => {
  const [err, avis] = await handleErrors(Avis.findByPk(req.params.id));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!avis) {
    return res.status(404).json({ error: 'Avis not found' });
  }
  res.status(200).json(avis);
};

exports.updateAvis = async (req, res) => {
  const [findErr, avis] = await handleErrors(Avis.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!avis) {
    return res.status(404).json({ error: 'Avis not found' });
  }

  const [updateErr] = await handleErrors(avis.update(req.body));
  if (updateErr) {
    return res.status(500).json({ error: updateErr.message });
  }
  res.status(200).json(avis);
};

exports.deleteAvis = async (req, res) => {
  const [findErr, avis] = await handleErrors(Avis.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!avis) {
    return res.status(404).json({ error: 'Avis not found' });
  }

  const [deleteErr] = await handleErrors(avis.destroy());
  if (deleteErr) {
    return res.status(500).json({ error: deleteErr.message });
  }
  res.status(204).json({});
};
