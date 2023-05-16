const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Patient extends Model {}

Patient.init(
  {
    idUtilisateur: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    motifConsultation: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Patient',
    tableName: 'Patients',
    timestamps: false,
  }
);

module.exports = Patient;
