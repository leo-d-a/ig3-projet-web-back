/* const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Eleve = require('./eleve');
const Formation = require('./formation');

const InscriptionFormation = sequelize.define('InscriptionFormation',{
  idInscription: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  dateInscription: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
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
});

module.exports = InscriptionFormation;
 */