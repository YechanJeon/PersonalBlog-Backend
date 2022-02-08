const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const postSchema = new schema({
    title : '',
    package : '',
    content : '',
    tags : [],
    description : '',
    key : '',
})

module.exports = model('savePostModel' , postSchema)