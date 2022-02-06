const mongoose = require('mongoose')
const schema = mongoose.Schema
const {model} = mongoose

const packagesScheam = new schema({
    name : '',
    color : '',
    key : '',
})

module.exports = model('packagesModel' , packagesScheam)