const DataTypes = require('sequelize');
const sequelize = require('../config/database')

const InscriptionsSeances = sequelize.define('InscriptionsSeances', {

    id_patient: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        allowNull: false,
    },

    id_seance: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        allowNull: false
    },

    creee_le : {
        type: DataTypes.STRING,
    }
},

{ tableName: "InscriptionsSeances", freezeTableName: true, timestamps: false }

);



module.exports = InscriptionsSeances