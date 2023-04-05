const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const TrainingProgram = sequelize.define('trainingProgram', {
    id_: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    }
    

})