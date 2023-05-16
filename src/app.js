const express = require('express')
const helmet = require('helmet')
const { Utilisateurs, Patients, Eleves, InscriptionsFormations, Avis, Formations } = require('./models/models')


const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use('/formations', FormationsController.creerFormation)

//Require routes of type GET
app.get("/", (req, res)=>{
    let uptimeObj = { uptime : process.uptime() }
    let uptimeStr = JSON.stringify(uptimeObj)
    res.status(200).send(uptimeStr)
})

module.exports = app

