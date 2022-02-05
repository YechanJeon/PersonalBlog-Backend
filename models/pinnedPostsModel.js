const mongoose = require('mongoose')
const schema = mongoose.Schema
const {model} = mongoose

const pinnedPostsSchema = new schema({
    'post-key' : '',
    key : '',
})

module.exports = model('pinnedPostsModel' , pinnedPostsSchema)