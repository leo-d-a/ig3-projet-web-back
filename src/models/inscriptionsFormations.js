const DataTypes = require('sequelize');
const sequelize = require('../config/database');
// const Formations = require('./formations');
// const Eleves = require('./eleves');

const InscriptionsFormations = sequelize.define('InscriptionsFormations', {

    id_formation: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        // references: {
        //     model: Formations,
        //     key: 'id_formation'
        // },
        allowNull: false
    },

    id_eleve: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        // references: {
        //     model: Eleves,
        //     key: 'id_eleve'
        // },
        allowNull: false
    },

    creee_le : {
        type: DataTypes.DATE,
        allowNull: false,
        validate : {
            isDate: true
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

