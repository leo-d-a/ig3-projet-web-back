const DataTypes = require('sequelize');
const sequelize = require('../config/database')

const Seances = sequelize.define('Seances', {

    id_seance: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    libelle: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
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

    est_present : {
        type: DataTypes.BOOLEAN,
        validate : {
            isBoolean: true
        }
    }
},

{ tableName: "Seances", freezeTableName: true, timestamps: false }

);



module.exports = Seances