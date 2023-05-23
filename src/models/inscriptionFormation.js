const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Eleve = require('./eleve');
const Formation = require('./formation');

class InscriptionFormation extends Model {}

InscriptionFormation.init({
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
},{
  sequelize,
  modelName: 'InscriptionFormation',
  tableName: 'InscriptionsFormations',
  timestamps: false,
});

InscriptionFormation.belongsTo(Eleve);
InscriptionFormation.belongsTo(Formation);
Eleve.hasMany(InscriptionFormation);
Formation.hasMany(InscriptionFormation);

module.exports = InscriptionFormation;
