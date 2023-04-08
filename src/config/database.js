const { Sequelize } = require('sequelize')
const pwd = require('C:/Users/Léo/credentials.js')

const username = process.env.DB_USERNAME || 'postgres'
const password = process.env.DB_PASSWORD || '1234'
const host = process.env.DB_HOST || 'localhost'
const database = process.env.DB_NAME || 'projetweb'
const port = process.env.DB_PORT || 5432

const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false,
})

console.log('Connection to database has been established successfully.')

module.exports = sequelize