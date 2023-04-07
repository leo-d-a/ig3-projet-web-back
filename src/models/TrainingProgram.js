const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const TrainingProgram = sequelize.define('trainingProgram', {

    id_formation: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
    titre : {type: DataTypes.STRING},
    description : {type: DataTypes.STRING},
    competences : {type: DataTypes.STRING},
    date_debut : {type: DataTypes.STRING},
    date_fin : {type: DataTypes.STRING},
    lieu : {type: DataTypes.STRING}

})

module.exports = TrainingProgram