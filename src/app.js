const express = require('express');
const cors = require('cors');
const avisRoutes = require('./routes/avisRoutes');
const eleveRoutes = require('./routes/eleveRoutes');
const formationRoutes = require('./routes/formationRoutes');
const inscriptionFormationRoutes = require('./routes/inscriptionFormationRoutes');
const patientRoutes = require('./routes/patientRoutes');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const cookieParser = require("cookie-parser");

const Utilisateur = require('./models/utilisateur');
const Patient = require('./models/patient');
const Eleve = require('./models/eleve');
const Avis = require('./models/avis');
const InscriptionFormation = require('./models/inscriptionFormation');
const Formation = require('./models/formation');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());

// RELATIONS

// Un utilisateur peut être un patient, un élève, ou les deux
Utilisateur.hasOne(Patient, { foreignKey: 'utilisateurId' });
Patient.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' });

Utilisateur.hasOne(Eleve, { foreignKey: 'utilisateurId' });
Eleve.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' });

// Un élève peut s'inscrire à plusieurs formations
Eleve.belongsToMany(Formation, { through: InscriptionFormation, foreignKey: 'eleveId', otherKey: 'formationId' });
Formation.belongsToMany(Eleve, { through: InscriptionFormation, foreignKey: 'formationId', otherKey: 'eleveId' });

// Un élève peut avoir plusieurs avis
Eleve.hasMany(Avis, { foreignKey: 'eleveId' });
Avis.belongsTo(Eleve, { foreignKey: 'eleveId' });

// Une formation peut avoir plusieurs avis
Formation.hasMany(Avis, { foreignKey: 'formationId' });
Avis.belongsTo(Formation, { foreignKey: 'formationId' });

// Un avis est lié à une inscription à une formation (un élève ne peut avoir qu'un seul avis par formation)
Avis.belongsTo(InscriptionFormation, { foreignKey: 'idInscription' });
InscriptionFormation.hasOne(Avis, { foreignKey: 'idInscription' });

app.use("/avis", avisRoutes);
app.use("/eleves", eleveRoutes);
app.use("/formations", formationRoutes);
app.use("/inscriptions", inscriptionFormationRoutes);
app.use("/patients", patientRoutes);
app.use("/utilisateurs", utilisateurRoutes);

module.exports = app;
