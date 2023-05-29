const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Formation = sequelize.define('Formation', {
  formationId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  libelle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dateDébut: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateFin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  prix: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nbPlaces: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nbPlacesRestantes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estAnnulee: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Formation;
