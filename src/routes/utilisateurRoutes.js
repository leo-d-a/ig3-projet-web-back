const express = require('express');
const controller = require('../controllers/utilisateurController.js');
const router = express.Router();
const auth = require('../middleware/auth');

// GET REQUESTS
router.get('/', auth, controller.getAll);
router.get('/:id', auth, controller.getOne);
router.get('/:id/eleve', auth, controller.getEleve);
router.get('/:id/patient', auth, controller.getPatient);

// POST REQUEST
router.post('/', auth, controller.create);

// PUT REQUEST
router.put('/:id', auth, controller.update);

// DELETE REQUEST
router.delete('/:id', auth, controller.delete);

module.exports = router;
