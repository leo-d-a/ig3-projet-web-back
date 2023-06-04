const express = require('express');
const controller = require('../controllers/utilisateurController.js');
const authenticateJWT = require('../middleware/authenticateJWT'); // chemin vers votre middleware authenticateJWT
const router = express.Router();

// GET REQUESTS
router.get('/', authenticateJWT, (req, res) => { // Get all utilisateurs
  console.log('Route GET / appelée');
  controller.getAll(req, res);
});
router.get('/:id', authenticateJWT, (req, res) => { // Get one utilisateur by id
  console.log(`Route GET /${req.params.id} appelée`);
  controller.getOne(req, res);
});
router.get('/:id/eleve', authenticateJWT, (req, res) => { // Get one eleve
  console.log(`Route GET /${req.params.id}/eleve appelée`);
  controller.getEleve(req, res);
});
router.get('/:id/patient', authenticateJWT, (req, res) => { // Get one patient
  console.log(`Route GET /${req.params.id}/patient appelée`);
  controller.getPatient(req, res);
});

// POST REQUEST
router.post('/signup', (req, res) => { // Créer un nouvel utilisateur
  console.log('Route POST / appelée');
  controller.create(req, res);
});

router.post('/login', (req, res) => { // Connecter un utilisateur
  console.log('Route POST /login appelée');
  controller.login(req, res);
});

// PUT REQUEST
router.put('/:id', authenticateJWT, (req, res) => { // Update an existing utilisateur
  console.log(`Route PUT /${req.params.id} appelée`);
  controller.update(req, res);
});

// DELETE REQUEST
router.delete('/:id', authenticateJWT, (req, res) => { // Delete an existing utilisateur
  console.log(`Route DELETE /${req.params.id} appelée`);
  controller.delete(req, res);
});

module.exports = router;
