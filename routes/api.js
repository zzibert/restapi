const express = require('express')
const Ninja = require('../models/ninja')

const router = express.Router()

//get a list of ninjas from the db
router.get('/ninjas', (req, res, next) => {
    res.send({type: 'GET'})
})

//add a new ninja to the db
router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body)
    .then((ninja) => {
        res.send(ninja)
    })
    .catch(next)
})

//update a ninja in the database
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findById({_id: req.params.id}).then(ninja => {
            res.send(ninja)
        })
    })
})

//delete a ninja in the database
router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id}).then(ninja => {
        res.send(ninja)
    })
})

module.exports = router