const bcrypt = require('bcrypt');
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Utilisateur extends Model {
  async setPassword(password) {
    const saltRounds = 10;
    this.motDePasse = await bcrypt.hash(password, saltRounds);
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.motDePasse);
  }
}

Utilisateur.init(
  {
    idUtilisateur: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexe: {
      type: DataTypes.ENUM('M', 'F', 'Autre'),
      allowNull: false,
    },
    dateNaissance: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    adresse: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [10],
      },
    },
    motDePasse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Utilisateur',
    timestamps: false,
    hooks: {
      beforeCreate: async (utilisateur) => {
        await utilisateur.setPassword(utilisateur.motDePasse);
      },
      beforeUpdate: async (utilisateur) => {
        if (utilisateur.changed('motDePasse')) {
          await utilisateur.setPassword(utilisateur.motDePasse);
        }
      },
    },
  }
);

module.exports = Utilisateur;
