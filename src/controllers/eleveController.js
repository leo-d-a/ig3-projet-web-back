/* const Eleve = require('../models/eleve');
const Utilisateur = require('../models/utilisateur');

exports.getAll = async (_, res) => {
  try {
    const eleves = await Eleve.findAll({
      include: [Utilisateur]
    });
    res.status(200).json(eleves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id, {
      include: [Utilisateur]
    });
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }
    res.status(200).json(eleve);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUtilisateur = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id, {
      include: [Utilisateur]
    });
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }
    res.status(200).json(eleve.Utilisateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFormations = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id, {
      include: ['Formations']
    });
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }
    res.status(200).json(eleve.Formations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAvis = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id, {
      include: ['Avis']
    });
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }
    res.status(200).json(eleve.Avis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const eleve = await Eleve.create(req.body);
    res.status(201).json(eleve);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id);
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }
    await eleve.update(req.body);
    res.status(200).json(eleve);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id);
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }
    await eleve.destroy();
    res.status(204).json({});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 */