const { Sequelize } = require('sequelize')

const username = process.env.DB_USERNAME || 'postgres'
const password = process.env.DB_PASSWORD || '1234'
const host = process.env.DB_HOST || 'localhost'
const database = process.env.DB_NAME || 'postgres'
const port = process.env.DB_PORT || 5432

const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false,
})

sequelize.authenticate()
  .then(() =>{
    console.log("Database connection established")
  })
  .catch(err =>{
    console.log("error: " + err)
  })

module.exports = sequelize