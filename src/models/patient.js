const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Utilisateur = require('./utilisateur');

const Patient = sequelize.define('Patient', {
  patientId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  estNouveau: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

Patient.belongsTo(Utilisateur);
Utilisateur.hasOne(Patient);

module.exports = Patient;
