const express = require('express');
const controller = require('../controllers/utilisateurController.js');
const router = express.Router();


// GET REQUESTS
router.get('/', (req, res) => { // Get all utilisateurs
  console.log('Route GET / appelée');
  controller.getAll(req, res);
});
router.get('/:id', (req, res) => { // Get one utilisateur by id
  console.log(`Route GET /${req.params.id} appelée`);
  controller.getOne(req, res);
});
router.get('/:id/eleve', (req, res) => { // Get one eleve
  console.log(`Route GET /${req.params.id}/eleve appelée`);
  controller.getEleve(req, res);
});
router.get('/:id/patient', (req, res) => { // Get one patient
  console.log(`Route GET /${req.params.id}/patient appelée`);
  controller.getPatient(req, res);
});

// POST REQUEST
router.post('/', (req, res) => { // Create a new utilisateur
  console.log('Route POST / appelée');
  controller.create(req, res);
});

// PUT REQUEST
router.put('/:id', (req, res) => { // Update an existing utilisateur
  console.log(`Route PUT /${req.params.id} appelée`);
  controller.update(req, res);
});

// DELETE REQUEST
router.delete('/:id', (req, res) => { // Delete an existing utilisateur
  console.log(`Route DELETE /${req.params.id} appelée`);
  controller.delete(req, res);
});

module.exports = router;
