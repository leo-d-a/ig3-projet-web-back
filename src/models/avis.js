const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Avis = sequelize.define('Avis', {
  avisId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  note: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  commentaire: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dateAvis: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  idInscription: {
    type: DataTypes.UUID,
    allowNull: false
  },
});


module.exports = Avis;
