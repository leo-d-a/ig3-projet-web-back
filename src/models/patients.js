const DataTypes = require('sequelize');
const sequelize = require('../config/database')

const Patients = sequelize.define('patients', {

    id_patient: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    id_utilisateur: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        allowNull: false
    },

    motif_consult : {
        type: DataTypes.STRING,
    },
})

module.exports = Patients