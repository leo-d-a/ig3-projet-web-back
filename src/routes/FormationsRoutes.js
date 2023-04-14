const express = require('express')
const router = express.Router()

// Routes pour toutes les formations
router.route("/formations")
  .get(getAllFormations) // Done // obtenir toutes les formations
  .post(createFormation) // Done // créer une nouvelle formation

// Routes pour une formation spécifique
router.route("/formations/:id")
  .get(getFormationById) // Done // obtenir une formation par son id
  .put(updateFormationById) // Done // mettre à jour une formation par son id
  .delete(deleteFormationById) // Done // supprimer une formation par son id

// Routes pour filtrer les formations par libellé et compétences
router.route("/formations/libelle/:libelle")
  .get(getFormationsByLibelle) // Done // obtenir toutes les formations ayant un certain libellé

router.route("/formations/competences/:competences")
  .get(getFormationsByCompetences) // Done // obtenir toutes les formations ayant certaines compétences

router.route("/formations/:id/est_deplacee")
  .put(updateDeplaceeById) // Done // mettre à jour si une formation a été déplacée ou non par son id

router.route("/formations/:id/est_annulee")
  .put(updateAnnuleeById) // Done // mettre à jour si une formation a été annulée ou non par son id


module.exports = router
