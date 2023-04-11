const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Utilisateurs extends Model {
  async setPassword(password) {
    const saltRounds = 10;
    this.mot_de_passe = await bcrypt.hash(password, saltRounds);
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.mot_de_passe);
  }
}

Utilisateurs.init(
  {
    id: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
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
      allowNull: false
    },
    sexe: {
      type: DataTypes.STRING,
      allowNull: false
    },

    date_naissance: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    adresse: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
    },

    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true
      },
    },

    mot_de_passe: {
      type: DataTypes.STRING,
      allowNull: false
    },

    est_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: 'utilisateurs',
    hooks: {
      beforeCreate: async (utilisateur) => {
        await utilisateur.setPassword(utilisateur.mot_de_passe);
      },
      beforeUpdate: async (utilisateur) => {
        await utilisateur.setPassword(utilisateur.mot_de_passe);
      },
    },
  },
);

module.exports = Utilisateurs;
