const DataTypes = require('sequelize');
const sequelize = require('../config/database')

const InscriptionsSeances = sequelize.define('inscriptionsSeances', {

    id_inscription_seance: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    id_seance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_patient: {
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

    est_present : {
        type: DataTypes.BOOLEAN,
    }

})

module.exports = InscriptionsSeances
