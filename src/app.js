const express = require('express');
const cors = require('cors');
const avisRoutes = require('./routes/avisRoutes');
const eleveRoutes = require('./routes/eleveRoutes');
const formationRoutes = require('./routes/formationRoutes');
const inscriptionFormationRoutes = require('./routes/inscriptionFormationRoutes');
const patientRoutes = require('./routes/patientRoutes');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());

app.use("/avis", avisRoutes);
app.use("/eleves", eleveRoutes);
app.use("/formations", formationRoutes);
app.use("/inscriptions", inscriptionFormationRoutes);
app.use("/patients", patientRoutes);
app.use("/utilisateurs", utilisateurRoutes);

module.exports = app;


