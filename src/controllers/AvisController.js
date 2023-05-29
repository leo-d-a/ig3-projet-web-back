const Avis = require('../models/avis');
const Eleve = require('../models/eleve');
const Formation = require('../models/formation');

exports.getAll = async (_, res) => {
  try {
    const avis = await Avis.findAll({
      include: [Eleve, Formation],
    });
    res.status(200).json(avis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const avis = await Avis.findByPk(req.params.id, {
      include: [Eleve, Formation],
    });
    if (!avis) {
      return res.status(404).json({ error: 'Avis not found' });
    }
    res.status(200).json(avis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAvisFormation = async (req, res) => {
  try {
    const avis = await Avis.findAll({
      where: { FormationId: req.params.id },
      include: [Eleve, Formation],
    });
    res.status(200).json(avis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAvisEleve = async (req, res) => {
  try {
    const avis = await Avis.findAll({
      where: { EleveId: req.params.id },
      include: [Eleve, Formation],
    });
    res.status(200).json(avis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { note, commentaire, EleveId, FormationId } = req.body;
    const avis = await Avis.create({ note, commentaire, EleveId, FormationId });
    res.status(201).json(avis);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const avis = await Avis.findByPk(req.params.id, {
      include: [Eleve, Formation],
    });
    if (!avis) {
      return res.status(404).json({ error: 'Avis not found' });
    }
    const { note, commentaire, EleveId, FormationId } = req.body;
    await avis.update({ note, commentaire, EleveId, FormationId });
    res.status(200).json(avis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const avis = await Avis.findByPk(req.params.id, {
      include: [Eleve, Formation],
    });
    if (!avis) {
      return res.status(404).json({ error: 'Avis not found' });
    }
    await avis.destroy();
    res.status(204).json({});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
