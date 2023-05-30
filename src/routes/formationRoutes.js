/* const express = require('express');
const controller = require('../controllers/formationController');
const router = express.Router();

// GET REQUESTS
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/:id/eleves', controller.getInscrits);

// POST REQUEST
router.post('/', controller.create);
router.post('/:id/inscription/:eleveId', controller.inscrire);

// PUT REQUEST
router.put('/:id', controller.update);

// DELETE REQUEST
router.delete('/:id', controller.delete);
router.delete('/:id/inscription/:eleveId', controller.annulerInscription);

module.exports = router;
 */