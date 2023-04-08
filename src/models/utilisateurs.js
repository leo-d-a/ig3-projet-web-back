const DataTypes = require('sequelize');
const sequelize = require('../config/database')

const Utilisateurs = sequelize.define('utilisateurs', {

    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    nom : {
        type: DataTypes.STRING,
        allowNull: false
    },

    prenom : {
        type: DataTypes.STRING,
        allowNull: false
    },

    age : {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    email : {
        type: DataTypes.STRING,
        allowNull: false
    },

    telephone : {
        type: DataTypes.STRING,
        allowNull: false
    },

    mot_de_passe : {
        type: DataTypes.STRING,
        allowNull: false
    },

    est_admin : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    est_eleve : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    est_patient : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

})

module.exports = Utilisateurs
