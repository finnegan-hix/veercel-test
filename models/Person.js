const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
        min: 18
    },
    birthday: {
        type: Date
    }
})

module.exports = mongoose.model('Person', personSchema)