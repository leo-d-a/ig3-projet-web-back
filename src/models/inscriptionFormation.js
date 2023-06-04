const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const InscriptionFormation = sequelize.define('InscriptionFormation',{
  ID_eleve: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  ID_formation: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  estAnnulee: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  estPresente: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  estValidee: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  idInscription: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false
  },
});

module.exports = InscriptionFormation;
