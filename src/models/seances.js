const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Seances = sequelize.define('seances', {
    id_seance: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    titre: {
        type: DataTypes.STRING,
    },

    description: {
        type: DataTypes.STRING,
    },

    date_debut: {
        type: DataTypes.DATE,
    },
    
    date_fin: {
        type: DataTypes.DATE,
    },
    
    lieu: {
        type: DataTypes.STRING,
    }

})

module.exports = Seances