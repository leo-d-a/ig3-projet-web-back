const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Eleve = sequelize.define('Eleve', {
  eleveId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  parcours: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 500],
    },
  },
  niveauActuel: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 50],
    },
  },
  professionSante: {
    type: DataTypes.STRING,
    validate: {
      len: [0, 100],
    },
  },
});

module.exports = Eleve;
