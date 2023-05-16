const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class InscriptionFormation extends Model {}

InscriptionFormation.init(
  {
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
      validate: {
        isBoolean: true,
      },
    },
    estValidee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        isBoolean: true,
      },
    },
  },
  {
    sequelize,
    modelName: 'InscriptionFormation',
    tableName: 'InscriptionsFormations',
    timestamps: false,
  }
);

module.exports = InscriptionFormation;
