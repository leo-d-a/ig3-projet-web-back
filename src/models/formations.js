const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Formations = sequelize.define('formations', {

    id_formation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date_debut: {
        type: DataTypes.DATE,
        allowNull: false
    },

    date_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },  

    lieu: {
        type: DataTypes.STRING,
    },

    nb_places: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = Formations