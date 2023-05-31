const express = require('express');
const cors = require('cors');

// ROUTES
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const eleveRoutes = require('./routes/eleveRoutes');
/* 
const patientRoutes = require('./routes/patientRoutes');
const inscriptionFormationRoutes = require('./routes/inscriptionFormationRoutes');
const avisRoutes = require('./routes/avisRoutes');
const formationRoutes = require('./routes/formationRoutes'); */

// MODELS

const Utilisateur = require('./models/utilisateur'); 
const Eleve = require('./models/eleve');

// const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
// app.use(cookieParser());

/* // RELATIONS

// Un utilisateur peut être un patient, un élève, ou les deux
Utilisateur.hasOne(Patient, { foreignKey: 'utilisateurId' });
Patient.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' });

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
InscriptionFormation.hasOne(Avis, { foreignKey: 'idInscription' }); */

Utilisateur.hasOne(Eleve, { foreignKey: 'utilisateurId' });
Eleve.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' });


/*app.use("/avis", avisRoutes);

app.use("/formation", formationRoutes);
app.use("/inscription", inscriptionFormationRoutes);
app.use("/patient", patientRoutes); */
app.use("/utilisateur", utilisateurRoutes);
app.use("/eleve", eleveRoutes);

module.exports = app;
