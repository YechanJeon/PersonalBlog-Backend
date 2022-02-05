const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const postSchema = new schema({
    title : '',
    package : '',
    contents : '',
    tags : [],
    date : '',
    description : '',
    author : '',
    pinned : false,
    key : '',
})

module.exports = model('postModel' , postSchema)