const express = require('express');
const router = express.Router();
const eleveController = require('../controllers/eleveController');

router.get('/', eleveController.getAll);
router.get('/:id', eleveController.getOne);
router.post('/', eleveController.create);
router.put('/:id', eleveController.update);
router.delete('/:id', eleveController.delete);

// Spécifique: Obtenir l'utilisateur correspondant à l'élève
router.get('/:id/utilisateur', eleveController.getUtilisateur);
// Spécifique: Obtenir toutes les formations auxquelles un élève est inscrit
router.get('/:id/formations', eleveController.getFormations);
// Spécifique: Obtenir tous les avis d'un élève
router.get('/:id/avis', eleveController.getAvis);

module.exports = router;
