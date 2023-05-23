const { handleErrors } = require('../helpers/handleErrors');
const Patient = require('../models/patient');

exports.getAll = async (_, res) => {
  const [err, patients] = await handleErrors(Patient.findAll());
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(200).json(patients);
};

exports.getOne = async (req, res) => {
  const [err, patient] = await handleErrors(Patient.findByPk(req.params.id));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }
  res.status(200).json(patient);
};

exports.getUtilisateur = async (req, res) => {
  const [err, patient] = await handleErrors(Patient.findByPk(req.params.id, { include: [Utilisateur] }));
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }
  const utilisateur = patient.Utilisateur;
  res.status(200).json(utilisateur);
};

exports.create = async (req, res) => {
  const [err, patient] = await handleErrors(Patient.create(req.body));
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  res.status(201).json(patient);
};

exports.update = async (req, res) => {
  const [findErr, patient] = await handleErrors(Patient.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }

  const [updateErr] = await handleErrors(patient.update(req.body));
  if (updateErr) {
    return res.status(500).json({ error: updateErr.message });
  }
  res.status(200).json(patient);
};

exports.delete = async (req, res) => {
  const [findErr, patient] = await handleErrors(Patient.findByPk(req.params.id));
  if (findErr) {
    return res.status(500).json({ error: findErr.message });
  }
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }

  const [deleteErr] = await handleErrors(patient.destroy());
  if (deleteErr) {
    return res.status(500).json({ error: deleteErr.message });
  }
  res.status(204).json({});
};
