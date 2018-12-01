const express = require('express')

const router = express.Router()

//get a list of ninjas from the db
router.get('/ninjas', (req, res) => {
    res.send({type: 'GET'})
})

//add a new ninja to the db
router.post('/ninjas', (req, res) => {
    res.send({type: 'POST'})
})

//update a ninja in the database
router.put('/ninjas/:id', (req, res) => {
    res.send({type: 'PUT'})
})


//delete a ninja in the database
router.get('/ninjas/:id', (req, res) => {
    res.send({type: 'DELETE'})
})

module.exports = router