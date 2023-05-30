/* const InscriptionFormation = require('../models/inscriptionFormation');
const Formation = require('../models/formation');
const Eleve = require('../models/eleve');

exports.getAll = async (_, res) => {
  try {
    const inscriptions = await InscriptionFormation.findAll();
    res.status(200).json(inscriptions);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const inscription = await InscriptionFormation.findByPk(req.params.id);
    if (!inscription) {
      return res.status(404).json({ error: 'Inscription not found' });
    }
    res.status(200).json(inscription);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getInscriptionsFormation = async (req, res) => {
  try {
    const inscriptions = await InscriptionFormation.findAll({
      where: { FormationId: req.params.id },
      include: [Formation, Eleve],
    });
    res.status(200).json(inscriptions);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getInscriptions = async (req, res) => {
  try {
    const inscriptions = await InscriptionFormation.findAll({
      where: { EleveId: req.params.id },
      include: [Formation, Eleve],
    });
    res.status(200).json(inscriptions);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const inscription = await InscriptionFormation.create(req.body);
    res.status(201).json(inscription);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const inscription = await InscriptionFormation.findByPk(req.params.id);
    if (!inscription) {
      return res.status(404).json({ error: 'Inscription not found' });
    }
    await inscription.update(req.body);
    res.status(200).json(inscription);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const inscription = await InscriptionFormation.findByPk(req.params.id);
    if (!inscription) {
      return res.status(404).json({ error: 'Inscription not found' });
    }
    await inscription.destroy();
    res.status(204).json({});
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
 */