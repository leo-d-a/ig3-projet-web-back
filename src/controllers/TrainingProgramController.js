const TrainingProgram = require('../models/models')

exports.createTraining = async (req, res)=>{ 
    const { name, description, startDate, endDate } = req.body 
    if (!name || !description || !startDate || !endDate) {
        res.status(400).send("Missing required fields")
    }
    res.status(200).send(`This is ${name}, ${description}, it starts on ${startDate} and end on ${endDate}`) 
}