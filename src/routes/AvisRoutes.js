const express = require('express');
const router = express.Router();

// Routes pour tous les avis
router.route("/avis")
    .get(getAllAvis) // obtenir tous les avis
    .post(createAvis) // créer un nouvel avis

// Routes pour un avis spécifique
router.route("/avis/:id")
    .get(getAvisById) // obtenir un avis par son id
    .put(updateAvisById) // mettre à jour un avis par son id
    .delete(deleteAvisById) // supprimer un avis par son id

// Routes pour filtrer les avis par id_eleve et id_formation
router.route("/avis/eleve/:id_eleve")
    .get(getAvisByIdEleve) // obtenir tous les avis d'un élève par son id_eleve

router.route("/avis/formation/:id_formation")
    .get(getAvisByIdFormation) // obtenir tous les avis d'une formation par son id_formation

module.exports = router