const express = require('express');
const cors = require('cors');

// ROUTES
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const eleveRoutes = require('./routes/eleveRoutes');
const patientRoutes = require('./routes/patientRoutes');
const formationRoutes = require('./routes/formationRoutes');
const inscriptionFormationRoutes = require('./routes/inscriptionFormationRoutes');
const avisRoutes = require('./routes/avisRoutes');

// MODELS

const Utilisateur = require('./models/utilisateur'); 
const Eleve = require('./models/eleve');
const Patient = require('./models/patient');
const Formation = require('./models/formation');
const InscriptionFormation = require('./models/inscriptionFormation');
const Avis = require('./models/avis');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

// RELATIONS

Utilisateur.hasOne(Eleve, { foreignKey: 'utilisateurId' });
Eleve.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' });

// Un utilisateur peut être un patient, un élève, ou les deux
Utilisateur.hasOne(Patient, { foreignKey: 'utilisateurId' });
Patient.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' });

// Un élève peut s'inscrire à plusieurs formations
Eleve.belongsToMany(Formation, { through: InscriptionFormation, foreignKey: 'ID_eleve'});
Formation.belongsToMany(Eleve, { through: InscriptionFormation, foreignKey: 'ID_formation' });

// Un élève peut avoir plusieurs avis
Eleve.hasMany(Avis, { foreignKey: 'eleveId' });
Avis.belongsTo(Eleve, { foreignKey: 'eleveId' });

// Une formation peut avoir plusieurs avis
Formation.hasMany(Avis, { foreignKey: 'formationId' });
Avis.belongsTo(Formation, { foreignKey: 'formationId' });

// Un avis est lié à une inscription à une formation (un élève ne peut avoir qu'un seul avis par formation)
Avis.belongsTo(InscriptionFormation, { foreignKey: 'idInscription' });
InscriptionFormation.hasOne(Avis, { foreignKey: 'idInscription' });

app.use("/utilisateur", utilisateurRoutes);
app.use("/patient", patientRoutes); 
app.use("/eleve", eleveRoutes);
app.use("/formation", formationRoutes);
app.use("/inscription", inscriptionFormationRoutes);
app.use("/avis", avisRoutes);

module.exports = app;
