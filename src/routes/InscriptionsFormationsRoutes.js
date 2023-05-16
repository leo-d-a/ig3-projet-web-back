const express = require('express')
const router = express.Router()

//Ceci est une table de jointure entre les formations et les élèves

// Routes pour toutes les inscriptions aux formations
router.route("/inscriptionsFormations")
    .get(getAllInscriptionsFormations) // obtenir toutes les inscriptions aux formations
    .post(createInscriptionFormation) // créer une nouvelle inscription à une formation

// Routes pour une inscription via id_formation
router.route("/inscriptionsFormations/:id_formation")
    .get(getInscriptionFormationByIdFormation) // obtenir une inscription à une formation par son id_formation
    .put(updateInscriptionFormationByIdFormation) // mettre à jour une inscription à une formation par son id_formation
    .delete(deleteInscriptionFormationByIdFormation) // supprimer une inscription à une formation par son id_formation

// Routes pour une inscription via id_eleve
router.route("/inscriptionsFormations/:id_eleve")
    .get(getInscriptionFormationByIdEleve) // obtenir une inscription à une formation par son id_eleve
    .put(updateInscriptionFormationByIdEleve) // mettre à jour une inscription à une formation par son id_eleve
    .delete(deleteInscriptionFormationByIdEleve) // supprimer une inscription à une formation par son id_eleve

// Routes pour une inscription via date d'inscription
router.route("/inscriptionsFormations/:creee_le")
    .get(getInscriptionFormationByDate) // obtenir une inscription à une formation par sa date d'inscription

module.exports = router



