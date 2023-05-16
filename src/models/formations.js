const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Formation extends Model {}

Formation.init(
  {
    idFormation: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    dateDebut: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
    dateFin: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
    prix: {
      type: DataTypes.FLOAT,
    },
    nbPlaces: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    estAnnulee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Formation',
    tableName: 'Formations',
    timestamps: false,
  }
);

module.exports = Formation;
