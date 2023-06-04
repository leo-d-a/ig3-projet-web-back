const express = require('express');
const controller = require('../controllers/formationController');
const authenticateJWT = require('../middleware/authenticateJWT'); // chemin vers votre middleware authenticateJWT
const router = express.Router();

// GET REQUESTS
router.get('/', authenticateJWT, controller.getAll);
router.get('/:id', authenticateJWT, controller.getOne);
router.get('/:formationId/eleves', authenticateJWT, controller.getElevesByFormation);

// POST REQUEST
router.post('/', authenticateJWT, controller.create);

// PUT REQUEST
router.put('/:id', authenticateJWT, controller.update);

// DELETE REQUEST
router.delete('/:id', authenticateJWT, controller.delete);

module.exports = router;
