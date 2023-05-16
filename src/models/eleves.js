const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Eleve extends Model {}

Eleve.init(
  {
    idUtilisateur: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    parcours: {
      type: DataTypes.STRING,
    },
    niveauActuel: {
      type: DataTypes.STRING,
    },
    professionSante: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Eleve',
    tableName: 'Eleves',
    timestamps: true,
  }
);

module.exports = Eleve;
