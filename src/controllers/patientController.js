/* const Patient = require('../models/patient');
const Utilisateur = require('../models/utilisateur');

exports.getAll = async (_, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getUtilisateur = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id, { include: [Utilisateur] });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    const utilisateur = patient.Utilisateur;
    res.status(200).json(utilisateur);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    await patient.update(req.body);
    res.status(200).json(patient);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    await patient.destroy();
    res.status(204).json({});
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
 */