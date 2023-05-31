const Eleve = require('../models/eleve');
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

exports.getFormations = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id, {
      include: ['Formation'] //Erreur possiblement future 'Formation' au lieu de Formation (et pluriel)
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
      include: ['Avis'] //Erreur possiblement future 'Avis' au lieu de Avis 
    });
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }
    res.status(200).json(eleve.Avis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//Créer un eleve à partir d'un utilisateur (utilisateurId)

exports.create = async (req, res) => {
  try {
    const { utilisateurId, parcours, niveauActuel, professionSante } = req.body;

    // Log des données reçues
    console.log('Données reçues:', req.body);

    // Vérifiez si l'utilisateur existe
    const utilisateur = await Utilisateur.findByPk(utilisateurId);

    // Log du résultat de la recherche d'utilisateur
    if (!utilisateur) {
      console.log('Utilisateur introuvable');
      return res.status(404).json({ error: 'Utilisateur not found' });
    } else {
      console.log('Utilisateur trouvé');
    }

    // Créez le nouvel élève
    const eleve = await Eleve.create({
      utilisateurId, // utilisez l'utilisateurId du corps de la requête
      parcours,
      niveauActuel,
      professionSante,
    });

    // Log de la création de l'élève
    console.log('Elève créé', eleve);

    res.status(201).json(eleve);
  } catch (err) {
    console.log('Erreur:', err.message);
    res.status(400).json({ error: err.message });
  }
};

// 

exports.update = async (req, res) => {
  try {
    console.log(`Route PUT /${req.params.id} appelée`);
    
    const eleve = await Eleve.findByPk(req.params.id);
    console.log(`Eleve trouvé : ${eleve ? eleve.eleveId : 'Aucun eleve trouvé'}`);
    
    if (!eleve) {
      return res.status(404).json({ error: 'Eleve not found' });
    }

    console.log('Données reçues pour mise à jour :', req.body);

    await eleve.update(req.body);

    console.log('Eleve mis à jour :', eleve);

    res.status(200).json(eleve);
  } catch (err) {
    console.log(`Erreur dans update : ${err.message}`);
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
