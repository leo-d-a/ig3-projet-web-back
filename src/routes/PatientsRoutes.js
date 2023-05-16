const express = require('express')
const router = express.Router()

// Routes pour tous les patients
router.route("/patients")
    .get(getAllPatients) // obtenir tous les patients
    .post(createPatient) // créer un nouveau patient

router.route("/patients/:id_utilisateur")
    .get(getPatientByIdUtilisateur) // obtenir un patient par son id_utilisateur
    .put(updatePatientByIdUtilisateur) // mettre à jour un patient par son id_utilisateur
    .delete(deletePatientByIdUtilisateur) // supprimer un patient par son id_utilisateur

module.exports = router

