const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Formations = sequelize.define('Formations', {

    id_formation: {
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

    prix : {
        type: DataTypes.FLOAT,  
    },

    nb_places: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
            isNumeric: true
        }
    },

    est_deplacee : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate : {
            isBoolean: true
        }
    },

    est_annulee : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },  

},

{ tableName: "Formations", freezeTableName: true, timestamps: false}

)

module.exports = Formations