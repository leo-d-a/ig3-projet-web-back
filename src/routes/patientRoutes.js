const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/', patientController.getAll);
router.get('/:id', patientController.getOne);
router.post('/', patientController.create);
router.put('/:id', patientController.update);
router.delete('/:id', patientController.delete);

// Spécifique: Obtenir l'utilisateur correspondant au patient
router.get('/:id/utilisateur', patientController.getUtilisateur);

module.exports = router;
