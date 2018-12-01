const express = require('express');

//set up express app
const app = express();

//listen for requests
app.listen(4000 || process.env.port , () => {
    console.log("Listening to port 4000!");
});