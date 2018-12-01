const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create ninja Schema & Model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    }
    //add in geo location
})

const Ninja = mongoose.model('ninja', NinjaSchema);

model.exports = Ninja