const DataTypes = require('sequelize');
const sequelize = require('../config/database');
const { validate } = require('uuid');

const InscriptionsFormations = sequelize.define('inscriptionsFormations', {

    id_formation: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        primaryKey : true,
        allowNull: false
    },

    id_eleve: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        primaryKey : true,
        allowNull: false
    },

    cree_le : {
        type: DataTypes.DATE,
        allowNull: false,
        validate : {
            isDate: true
        }
    },

})

module.exports = InscriptionsFormations

