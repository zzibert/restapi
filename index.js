const express = require('express');

//set up express app
const app = express();

app.get('/', (req, res) => {
    console.log("GET request on root!")
    res.send({ name: "Yoshi"})
})

//listen for requests
app.listen(4000 || process.env.port , () => {
    console.log("Listening to port 4000!");
});