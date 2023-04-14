const DataTypes = require('sequelize');
const sequelize = require('../config/database');
// const Formations = require('./formations');
// const Eleves = require('./eleves');

const InscriptionsFormations = sequelize.define('InscriptionsFormations', {

    id_formation: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        allowNull: false
    },

    id_eleve: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        allowNull: false
    },

    creee_le : {
        type: DataTypes.DATE,
        allowNull: false,
        validate : {
            isDate: true
        },
    },

    est_confirme : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    est_present : {
        type: DataTypes.BOOLEAN,
        validate : {
            isBoolean: true
        }
    },

    est_valide : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate : {
            isBoolean: true
        }
    }

},

{ tableName: "InscriptionsFormations", freezeTableName: true, timestamps: false}

)

module.exports = InscriptionsFormations

