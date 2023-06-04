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
    validate: {
      len: [8, 128],
    },
  },
  estAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Utilisateur.beforeCreate(async (utilisateur, options) => {
  const hashedPassword = await bcrypt.hash(utilisateur.motDePasse, 10);
  utilisateur.motDePasse = hashedPassword;
});

Utilisateur.afterCreate((utilisateur, options) => {
  console.log(`Utilisateur créé avec succès : ${utilisateur.utilisateurId}`);
});

module.exports = Utilisateur;
