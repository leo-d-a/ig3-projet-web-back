const { Patient } = require('../models/models');

// Obtenir tous les patients
const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.json(patients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const createPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getPatientByIdUtilisateur = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id_utilisateur);
        if (patient) {
            res.json(patient);
        } else {
            res.status(404).json({ error: 'Patient non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updatePatientByIdUtilisateur = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id_utilisateur);
        if (patient) {
            await patient.update(req.body);
            res.json(patient);
        } else {
            res.status(404).json({ error: 'Patient non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deletePatientByIdUtilisateur = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id_utilisateur);
        if (patient) {
            await patient.destroy();
            res.sendStatus(204);
        } else {
            res.status(404).json({ error: 'Patient non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllPatients,
    createPatient,
    getPatientByIdUtilisateur,
    updatePatientByIdUtilisateur,
    deletePatientByIdUtilisateur
}   
