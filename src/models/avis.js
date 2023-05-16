const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Avis extends Model {}

Avis.init(
  {
    idAvis: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
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
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Avis',
    tableName: 'Avis',
    timestamps: true,
  }
);

module.exports = Avis;
