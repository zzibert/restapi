const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago')

mongoose.Promise = global.Promise

app.use(bodyParser.json())

const routes = require('./routes/api')

//initialize routes
app.use('/api', routes)

//error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message})
})

//listen for requests
app.listen(4000 || process.env.port , () => {
    console.log("Listening to port 4000!");
});