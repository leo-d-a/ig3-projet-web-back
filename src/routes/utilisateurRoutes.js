const express = require('express');
const controller = require('../controllers/utilisateurController.js');
const router = express.Router();
// const auth = require('../middleware/auth');

// GET REQUESTS
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/:id/eleve', controller.getEleve);
router.get('/:id/patient', controller.getPatient);

// POST REQUEST
router.post('/', controller.create);

// PUT REQUEST
router.put('/:id', controller.update);

// DELETE REQUEST
router.delete('/:id', controller.delete);

module.exports = router;
