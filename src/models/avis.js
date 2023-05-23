const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Eleve = require('./eleve');
const Formation = require('./formation');

const Avis = sequelize.define('Avis', {
  avisId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
});

Avis.belongsTo(Eleve);
Avis.belongsTo(Formation);
Eleve.hasMany(Avis);
Formation.hasMany(Avis);

module.exports = Avis;
