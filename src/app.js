const express = require('express');
const helmet = require('helmet');
const { Sequelize } = require('sequelize');


const utilisateurRoutes = require('./routes/utilisateurRoutes');
const patientRoutes = require('./routes/patientRoutes');
const eleveRoutes = require('./routes/eleveRoutes');
const formationRoutes = require('./routes/formationRoutes');
const inscriptionFormationRoutes = require('./routes/inscriptionFormationRoutes');
const avisRoutes = require('./routes/avisRoutes');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Initialize models with sequelize
console.log('Initializing models...');
Utilisateur.initialize(Sequelize);
Patient.initialize(Sequelize);
Eleve.initialize(Sequelize);
Formation.initialize(Sequelize);
InscriptionFormation.initialize(Sequelize);
Avis.initialize(Sequelize);

// Sync models with database
console.log('Syncing models with database...');
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Models synced with database.');
  })
  .catch((error) => {
    console.error('Error syncing models with database:', error);
  });

// Set up routes
console.log('Setting up routes...');
app.use('/routes/utilisateurs', utilisateurRoutes);
app.use('/routes/patients', patientRoutes);
app.use('/routes/eleves', eleveRoutes);
app.use('/routes/formations', formationRoutes);
app.use('/routes/inscriptions', inscriptionFormationRoutes);
app.use('/routes/avis', avisRoutes);

module.exports = app;
