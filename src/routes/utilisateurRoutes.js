const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

router.get('/', utilisateurController.getAll);
router.get('/:id', utilisateurController.getOne);
router.post('/', utilisateurController.create);
router.put('/:id', utilisateurController.update);
router.delete('/:id', utilisateurController.delete);

// Spécifique: Obtenir le profil d'élève d'un utilisateur
router.get('/:id/eleve', utilisateurController.getEleve);
// Spécifique: Obtenir le profil de patient d'un utilisateur
router.get('/:id/patient', utilisateurController.getPatient);

module.exports = router;
