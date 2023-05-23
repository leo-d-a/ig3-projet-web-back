const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avisController');

router.get('/', avisController.getAll);
router.get('/:id', avisController.getOne);
router.post('/', avisController.create);
router.put('/:id', avisController.update);
router.delete('/:id', avisController.delete);

// Spécifique: Obtenir tous les avis pour une formation spécifique
router.get('/formations/:id', avisController.getAvisFormation);
// Spécifique: Obtenir tous les avis d'un élève spécifique
router.get('/eleves/:id', avisController.getAvisEleve);

module.exports = router;
