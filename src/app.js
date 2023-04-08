
const express = require('express')
const helmet = require('helmet')
const trainingProgram = require('./routes/FormationsRoutes')


const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/formations', trainingProgram)

//Require routes of type GET
app.get("/", (req, res)=>{
    let uptimeObj = { uptime : process.uptime() }
    let uptimeStr = JSON.stringify(uptimeObj)
    res.status(200).send(uptimeStr)
})

module.exports = app

