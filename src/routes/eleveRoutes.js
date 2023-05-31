const express = require('express');
const controller = require('../controllers/eleveController');
const router = express.Router();

// GET REQUESTS
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/:id/formations', controller.getFormations);
router.get('/:id/avis', controller.getAvis);

// POST REQUEST
router.post('/', controller.create);

// PUT REQUEST
router.put('/:id', controller.update);

// DELETE REQUEST
router.delete('/:id', controller.delete);

module.exports = router;
