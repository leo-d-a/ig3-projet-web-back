const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{ res.status(200).send("Training Program Route") })

router.post("/", (req, res)=>{ 
    const { name, description, startDate, endDate } = req.body 
    if (!name || !description || !startDate || !endDate) {
        res.status(400).send("Missing required fields")
    }
    res.status(200).send(`This is ${name}, ${description}, it starts on ${startDate} and end on ${endDate}`) 
})

router.put("/description/:id", (req, res)=> { 
    const { id } = req.params
    const { description } = req.body
    if ( !id || isNaN(id) || !description ) {
        res.status(400).send("Please provide a valid id and a description")
    }
    res.status(200).send("The description has been modified")
})

router.delete("/:id", (req, res)=> {
    const { id } = req.params
    if ( !id || isNaN(id) ) {
        res.status(400).send("Please provide a valid id")
    }
    res.status(200).send("No more ")
})

module.exports = router
