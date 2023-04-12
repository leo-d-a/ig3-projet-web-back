const DataTypes = require('sequelize');
const sequelize = require('../config/database')

const Eleves = sequelize.define('Eleves', {

    id_eleve: {
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

    parcours : {
        type: DataTypes.STRING,
    },

    niveau_actuel : {
        type: DataTypes.STRING,
    },

    profession_sante : {
        type: DataTypes.STRING,
    }

},

{ tableName: "Eleves", freezeTableName: true, timestamps: false}

)

module.exports = Eleves