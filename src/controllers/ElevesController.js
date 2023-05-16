const { Eleve } = require('../models/models');

// Obtenir tous les élèves
const getAllEleves = async (req, res) => {
  try {
    const eleves = await Eleve.findAll();
    res.json(eleves);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir un élève par son id_utilisateur
const getEleveByIdUtilisateur = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id_utilisateur);
    if (eleve) {
      res.json(eleve);
    } else {
      res.status(404).json({ error: 'Élève non trouvé' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Créer un nouvel élève
const createEleve = async (req, res) => {
  try {
    const eleve = await Eleve.create(req.body);
    res.status(201).json(eleve);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mettre à jour un élève par son id_utilisateur
const updateEleveByIdUtilisateur = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id_utilisateur);
    if (eleve) {
      await eleve.update(req.body);
      res.json(eleve);
    } else {
      res.status(404).json({ error: 'Élève non trouvé' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un élève par son id_utilisateur
const deleteEleveByIdUtilisateur = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id_utilisateur);
    if (eleve) {
      await eleve.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Élève non trouvé' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir tous les élèves ayant un certain niveau_actuel
const getAllElevesByNiveauActuel = async (req, res) => {
  try {
    const niveauActuel = req.params.niveau_actuel;
    const eleves = await Eleve.findAll({
      where: {
        niveauActuel: niveauActuel,
      },
    });
    res.json(eleves);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mettre à jour le niveau actuel d'un élève
const updateNiveauActuelByIdUtilisateur = async (req, res) => {
  try {
    const eleve = await Eleve.findByPk(req.params.id_utilisateur);
    if (eleve) {
      await eleve.update({ niveauActuel: req.body.niveauActuel });
      res.json(eleve);
    } else {
      res.status(404).json({ error: 'Élève non trouvé' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir la liste des élèves triés par ordre alphabétique
const getAllElevesSortedByName = async (req, res) => {
    try {
      const eleves = await Eleve.findAll({
        order: [['nom', 'ASC']],
      });
      res.json(eleves);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
// Obtenir la liste des élèves triés par niveau d'études croissant
const getAllElevesSortedByNiveauActuelAscending = async (req, res) => {
try {
    const eleves = await Eleve.findAll({
    order: [['niveauActuel', 'ASC']],
    });
    res.json(eleves);
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

// Obtenir la liste des élèves triés par niveau d'études décroissant
const getAllElevesSortedByNiveauActuelDescending = async (req, res) => {
try {
    const eleves = await Eleve.findAll({
    order: [['niveauActuel', 'DESC']],
    });
    res.json(eleves);
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

// Obtenir la liste des élèves triés par date de création
const getAllElevesSortedByCreationDate = async (req, res) => {
try {
    const eleves = await Eleve.findAll({
    order: [['createdAt', 'ASC']],
    });
    res.json(eleves);
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

// Obtenir la liste des élèves triés par date de mise à jour
const getAllElevesSortedByUpdateDate = async (req, res) => {
try {
    const eleves = await Eleve.findAll({
    order: [['updatedAt', 'ASC']],
    });
    res.json(eleves);
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

module.exports = {
    getAllEleves,
    getEleveByIdUtilisateur,
    createEleve,
    updateEleveByIdUtilisateur,
    deleteEleveByIdUtilisateur,
    getAllElevesByNiveauActuel,
    updateNiveauActuelByIdUtilisateur,
    getAllElevesSortedByName,
    getAllElevesSortedByNiveauActuelAscending,
    getAllElevesSortedByNiveauActuelDescending,
    getAllElevesSortedByCreationDate,
    getAllElevesSortedByUpdateDate,
};
