const DataTypes = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const Utilisateur = sequelize.define('Utilisateur', {
  utilisateurId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateNaissance: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  motDePasse: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hash = bcrypt.hashSync(value, 10);
      this.setDataValue('motDePasse', hash);
    },
    validate: {
      len: [8, 128],
    },
  },
  estAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Utilisateur;
