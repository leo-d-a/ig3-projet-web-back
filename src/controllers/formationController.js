const { handleErrors } = require('../helpers/handleErrors');
const Formation = require('../models/formation');
const Eleve = require('../models/eleve');

exports.getAll = async (_, res) => {
  const [err, formations] = await handleErrors(Formation.findAll());
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(formations);
};

exports.getOne = async (req, res) => {
  const [err, formation] = await handleErrors(Formation.findByPk(req.params.id));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!formation) {
    return res.status(404).json({ error: 'Formation not found' });
  }
  res.status(200).json(formation);
};

exports.getInscrits = async (req, res) => {
  const [err, formation] = await handleErrors(Formation.findByPk(req.params.id, { include: Eleve }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!formation) {
    return res.status(404).json({ error: 'Formation not found' });
  }
  res.status(200).json(formation.Eleves);
};

exports.create = async (req, res) => {
  const { libelle, description, dateDébut, dateFin, prix, nbPlaces, nbPlacesRestantes, estAnnulee } = req.body;
  const [createErr, formation] = await handleErrors(
    Formation.create({ libelle, description, dateDébut, dateFin, prix, nbPlaces, nbPlacesRestantes, estAnnulee })
  );
  if (createErr) {
    return res.status(400).json({ error: createErr.message });
  }
  res.status(201).json(formation);
};

exports.update = async (req, res) => {
  const [findErr, formation] = await handleErrors(Formation.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!formation) {
    return res.status(404).json({ error: 'Formation not found' });
  }

  const { libelle, description, dateDébut, dateFin, prix, nbPlaces, nbPlacesRestantes, estAnnulee } = req.body;
  const [updateErr] = await handleErrors(
    formation.update({ libelle, description, dateDébut, dateFin, prix, nbPlaces, nbPlacesRestantes, estAnnulee })
  );
  if (updateErr) {
    return res.status(500).json({ error: updateErr.message });
  }
  res.status(200).json(formation);
};

exports.delete = async (req, res) => {
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

exports.inscrire = async (req, res) => {
  const [findErr, formation] = await handleErrors(Formation.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!formation) {
    return res.status(404).json({ error: 'Formation not found' });
  }

  const [findEleveErr, eleve] = await handleErrors(Eleve.findByPk(req.params.eleveId));
  if (findEleveErr) {
    return res.status(500).json({ error: findEleveErr.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }

  const [addErr] = await handleErrors(formation.addEleve(eleve));
  if (addErr) {
    return res.status(500).json({ error: addErr.message });
  }
  res.status(200).json({ message: 'Inscription successful' });
};

exports.annulerInscription = async (req, res) => {
  const [findErr, formation] = await handleErrors(Formation.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!formation) {
    return res.status(404).json({ error: 'Formation not found' });
  }

  const [findEleveErr, eleve] = await handleErrors(Eleve.findByPk(req.params.eleveId));
  if (findEleveErr) {
    return res.status(500).json({ error: findEleveErr.message });
  }
  if (!eleve) {
    return res.status(404).json({ error: 'Eleve not found' });
  }

  const [removeErr] = await handleErrors(formation.removeEleve(eleve));
  if (removeErr) {
    return res.status(500).json({ error: removeErr.message });
  }
  res.status(200).json({ message: 'Inscription canceled' });
};
