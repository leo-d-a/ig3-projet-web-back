const express = require('express');
const controller = require('../controllers/inscriptionFormationController');
const router = express.Router();

// GET REQUESTS
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/formations/:id', controller.getInscriptionsFormation);
router.get('/eleves/:id', controller.getInscriptions);

// POST REQUEST
router.post('/', controller.create);

// PUT REQUEST
router.put('/:id', controller.update);

// DELETE REQUEST
router.delete('/:id', controller.delete);

module.exports = router;
