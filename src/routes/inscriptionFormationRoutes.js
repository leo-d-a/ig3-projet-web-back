const express = require('express');
const router = express.Router();
const inscriptionFormationController = require('../controllers/inscriptionFormationController');

router.get('/', inscriptionFormationController.getAll);
router.get('/:id', inscriptionFormationController.getOne);
router.post('/', inscriptionFormationController.create);
router.put('/:id', inscriptionFormationController.update);
router.delete('/:id', inscriptionFormationController.delete);

// Spécifique: Obtenir toutes les inscriptions d'une formation spécifique
router.get('/formations/:id', inscriptionFormationController.getInscriptionsFormation);
// Spécifique: Obtenir toutes les inscriptions d'un élève spécifique
router.get('/eleves/:id', inscriptionFormationController.getInscriptions);

module.exports = router;
