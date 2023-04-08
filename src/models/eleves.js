const DataTypes = require('sequelize');
const sequelize = require('../config/database')

const Eleves = sequelize.define('eleves', {

    id_eleve: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    id_utilisateur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    parcours : {
        type: DataTypes.STRING,
    },

    niveau_actuel : {
        type: DataTypes.STRING,
    },

    cours_suivis : {
        type: DataTypes.STRING,
    }

})

module.exports = Eleves