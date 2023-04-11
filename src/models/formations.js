const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { validate } = require('uuid');

const Formations = sequelize.define('formations', {

    id_formation: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
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
        allowNull: false,
        validate : {
            isDate: true
        }
    },

    date_fin: {
        type: DataTypes.DATE,
        allowNull: false,
        validate : {
            isDate: true
        }
    },  

    lieu: {
        type: DataTypes.STRING,
    },

    nb_places: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
            isNumeric: true
        }
    },

    est_deplace : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate : {
            isBoolean: true
        }
    },

    est_annule : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },  

    est_valide : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate : {
            isBoolean: true
        }
    },

    est_present : {
        type: DataTypes.BOOLEAN,
        validate : {
            isBoolean: true
        }
    }

})

module.exports = Formations