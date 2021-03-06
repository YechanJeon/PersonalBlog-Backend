const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const postSchema = new schema({
    title : '',
    package : '',
    packageName : '',
    packageColor : '',
    content : '',
    tags : [],
    date : '',
    description : '',
    author : '',
    key : '',
})

module.exports = model('postModel' , postSchema)

