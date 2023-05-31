const Utilisateur = require('../models/utilisateur');
const Eleve = require('../models/eleve');
const Patient = require('../models/patient');

exports.getAll = async (_, res) => {
  try {
    console.log('getAll appelé');
    const utilisateurs = await Utilisateur.findAll();
    console.log(`utilisateurs trouvés : ${utilisateurs.length}`);
    res.status(200).json(utilisateurs);
  } catch (err) {
    console.log(`Erreur dans getAll : ${err.message}`);
    return res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    console.log(`getOne appelé avec id : ${req.params.id}`);
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    console.log(`Utilisateur trouvé : ${utilisateur ? utilisateur.utilisateurId : 'Aucun utilisateur trouvé'}`);
    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur not found' });
    }
    res.status(200).json(utilisateur);
  } catch (err) {
    console.log(`Erreur dans getOne : ${err.message}`);
    return res.status(500).json({ error: err.message });
  }
};

exports.getEleve = async (req, res) => {
  try {
    console.log(`getEleve appelé avec id : ${req.params.id}`);
    const eleve = await Eleve.findOne({ where: { utilisateurId: req.params.id } });
    console.log(`Eleve trouvé : ${eleve ? eleve.eleveId : 'Aucun eleve trouvé'}`);
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }
    res.status(200).json(eleve);
  } catch (err) {
    console.log(`Erreur dans getEleve : ${err.message}`);
    return res.status(500).json({ error: err.message });
  }
};

exports.getPatient = async (req, res) => {
  try {
    console.log(`getPatient appelé avec id : ${req.params.id}`);
    const patient = await Patient.findOne({ where: { utilisateurId: req.params.id } });
    console.log(`Patient trouvé : ${patient ? patient.PatientId : 'Aucun patient trouvé'}`);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (err) {
    console.log(`Erreur dans getPatient : ${err.message}`);
    return res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const { nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin } = req.body;
  try {
    console.log('create appelé avec le corps de la requête : ', req.body);
    const utilisateur = await Utilisateur.create({ nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin });
    console.log(`Utilisateur créé : ${utilisateur.utilisateurId}`);
    res.status(201).json(utilisateur);
  } catch (err) {
    console.log(`Erreur dans create : ${err.message}`);
    return res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    console.log(`update appelé avec id : ${req.params.id} et corps de la requête : `, req.body);
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur not found' });
    }
    const { nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin } = req.body;
    await utilisateur.update({ nom, prenom, sexe, dateNaissance, email, telephone, motDePasse, estAdmin });
    console.log(`Utilisateur mis à jour : ${utilisateur.utilisateurId}`);
    res.status(200).json(utilisateur);
  } catch (err) {
    console.log(`Erreur dans update : ${err.message}`);
    return res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    console.log(`delete appelé avec id : ${req.params.id}`);
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur not found' });
    }
    await utilisateur.destroy();
    console.log(`Utilisateur supprimé : ${utilisateur.utilisateurId}`);
    res.status(204).json({});
  } catch (err) {
    console.log(`Erreur dans delete : ${err.message}`);
    return res.status(500).json({ error: err.message });
  }
};
