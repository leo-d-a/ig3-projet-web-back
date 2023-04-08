const DataTypes = require('sequelize');
const sequelize = require('../config/database')

const InscriptionsFormations = sequelize.define('inscriptionsFormations', {

    id_inscription_formation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    id_formation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_eleve: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cree_le : {
        type: DataTypes.DATE,
        allowNull: false
    },

    modifie_le : {
        type: DataTypes.DATE,
    },

    est_deplace : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    est_annule : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },  

    est_valide : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    est_present : {
        type: DataTypes.BOOLEAN,
    }
    

})

module.exports = InscriptionsFormations

