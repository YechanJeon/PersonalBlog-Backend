const mongoose = require('mongoose')
const schema = mongoose.Schema
const {model} = mongoose

const userSchema = new schema({
    name : '',
    userId : '',
    description : '',
    company : '',
    location : '',
    website : '',
    key : {
        type : Number
    }
})

module.exports = model('userModel' , userSchema)