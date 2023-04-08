const DataTypes = require('sequelize');
const sequelize = require('../config/database')

const Patients = sequelize.define('patients', {

    id_patient: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    id_utilisateur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    sexe : {
        type: DataTypes.STRING,
        allowNull: false
    },

    antecedents_medicaux : {
        type: DataTypes.STRING,
    },

    antecedents_traitements : {
        type: DataTypes.STRING,
    },  

    traitement_actuel : {
        type: DataTypes.STRING,
    },

    etat : {
        type: DataTypes.STRING,
    },

    situation : {
        type: DataTypes.STRING,
    }

})

module.exports = Patients