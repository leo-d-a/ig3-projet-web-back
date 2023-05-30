/* const Formation = require('../models/formation');
const Eleve = require('../models/eleve');

exports.getAll = async (_, res) => {
  try {
    const formations = await Formation.findAll();
    res.status(200).json(formations);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (!formation) {
      return res.status(404).json({ error: 'Formation not found' });
    }
    res.status(200).json(formation);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getInscrits = async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id, { include: Eleve });
    if (!formation) {
      return res.status(404).json({ error: 'Formation not found' });
    }
    res.status(200).json(formation.Eleves);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { libelle, description, dateDébut, dateFin, prix, nbPlaces, estAnnulee } = req.body;
    const formation = await Formation.create({ libelle, description, dateDébut, dateFin, prix, nbPlaces, estAnnulee });
    res.status(201).json(formation);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (!formation) {
      return res.status(404).json({ error: 'Formation not found' });
    }
    const { libelle, description, dateDébut, dateFin, prix, nbPlaces, estAnnulee } = req.body;
    await formation.update({ libelle, description, dateDébut, dateFin, prix, nbPlaces, estAnnulee });
    res.status(200).json(formation);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (!formation) {
      return res.status(404).json({ error: 'Formation not found' });
    }
    await formation.destroy();
    res.status(204).json({});
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.inscrire = async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (!formation) {
      return res.status(404).json({ error: 'Formation not found' });
    }

    const eleve = await Eleve.findByPk(req.params.eleveId);
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }

    await formation.addEleve(eleve);
    res.status(200).json({ message: 'Inscription successful' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.annulerInscription = async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (!formation) {
      return res.status(404).json({ error: 'Formation not found' });
    }

    const eleve = await Eleve.findByPk(req.params.eleveId);
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }

    await formation.removeEleve(eleve);
    res.status(200).json({ message: 'Inscription canceled' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
 */