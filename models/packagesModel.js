const mongoose = require('mongoose')
const schema = mongoose.Schema
const {model} = mongoose

const packagesScheam = new schema({
    name : '',
    color : {
        type :Number
        //16비트
    },
    key : '',
})

module.exports = model('packagesModel' , packagesScheam)