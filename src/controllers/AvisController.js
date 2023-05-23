const { handleErrors } = require('../helpers/handleErrors');
const Avis = require('../models/avis');
const Eleve = require('../models/eleve');
const Formation = require('../models/formation');

exports.getAll = async (_, res) => {
  const [err, avis] = await handleErrors(Avis.findAll({
    include: [Eleve, Formation],
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(avis);
};

exports.getOne = async (req, res) => {
  const [err, avis] = await handleErrors(Avis.findByPk(req.params.id, {
    include: [Eleve, Formation],
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!avis) {
    return res.status(404).json({ error: 'Avis not found' });
  }
  res.status(200).json(avis);
};

exports.getAvisFormation = async (req, res) => {
  const [err, avis] = await handleErrors(Avis.findAll({
    where: { FormationId: req.params.id },
    include: [Eleve, Formation],
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(avis);
};

exports.getAvisEleve = async (req, res) => {
  const [err, avis] = await handleErrors(Avis.findAll({
    where: { EleveId: req.params.id },
    include: [Eleve, Formation],
  }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(avis);
};

exports.create = async (req, res) => {
  const { note, commentaire, EleveId, FormationId } = req.body;
  const [err, avis] = await handleErrors(Avis.create({ note, commentaire, EleveId, FormationId }));
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  res.status(201).json(avis);
};

exports.update = async (req, res) => {
  const [findErr, avis] = await handleErrors(Avis.findByPk(req.params.id, {
    include: [Eleve, Formation],
  }));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!avis) {
    return res.status(404).json({ error: 'Avis not found' });
  }

  const { note, commentaire, EleveId, FormationId } = req.body;
  const [updateErr] = await handleErrors(avis.update({ note, commentaire, EleveId, FormationId }));
  if (updateErr) {
    return res.status(500).json({ error: updateErr.message });
  }
  res.status(200).json(avis);
};

exports.delete = async (req, res) => {
  const [findErr, avis] = await handleErrors(Avis.findByPk(req.params.id, {
    include: [Eleve, Formation],
  }));
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
