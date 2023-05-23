const express = require('express');
const router = express.Router();
const formationController = require('../controllers/formationController');

router.get('/', formationController.getAll);
router.get('/:id', formationController.getOne);
router.post('/', formationController.create);
router.put('/:id', formationController.update);
router.delete('/:id', formationController.delete);

// Spécifique: Obtenir tous les élèves inscrits à une formation
router.get('/:id/eleves', formationController.getInscrits);
// Spécifique: Inscrire un élève à une formation
router.post('/:id/inscription/:eleveId', formationController.inscrire);
// Spécifique: Annuler l'inscription d'un élève à une formation
router.delete('/:id/inscription/:eleveId', formationController.annulerInscription);

module.exports = router;
