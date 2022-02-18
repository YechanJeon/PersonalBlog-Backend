const express = require('express')
const cors = require('cors')
const multer = require('multer')
// const fileUpload = require('express-fileupload');
const fs = require('fs')

const upload = multer({ dest: 'uploads/' })

const app = express()
const port = 80

app.use(express.json())
app.use(cors())
// app.use(fileUpload())

const {
    getPosts , 
    getPost, 
    getPostsByPackage , 
    getPostsByTag ,
    getSavedPosts, 
    getSavedPost,
    getPinnedPosts , 
    getPackages , 
    getPackage , 
    getUserInfo,
    getTags,
    getPinnedCheck
} = require('./router/getInfos')


const {
    postPost , 
    postPackage, 
    postSavePost , 
    postPinned
} = require('./router/postInfos')

const {
    removePinned,
    removeSavedPost,
    removePost,
    removePackage,
    updatePost, 
    updatePackage
} = require('./router/updateInfos')

const dbConfig = require('./controller/dbConfig')

dbConfig()

app.use(getPosts)
app.use(getPost)
app.use(getPostsByPackage)
app.use(getPostsByTag)
app.use(getSavedPosts)
app.use(getSavedPost)
app.use(getPinnedPosts)
app.use(getPackages)
app.use(getPackage)
app.use(getUserInfo)
app.use(getTags)
app.use(getPinnedCheck)

app.use(postPost)
app.use(postSavePost)
app.use(postPackage)
app.use(postPinned)

app.use(removePinned)
app.use(removeSavedPost)
app.use(removePost)
app.use(removePackage)
app.use(updatePost)
app.use(updatePackage)

app.use('/image' , express.static('image'))

// 

const postModel = require('./models/postsModel')
// const { getPostsByTags } = require('./controller/getInfos')

app.delete('/post' , async (req,res) => {
    postModel.deleteMany().then(
        res.status(200)
    ).catch(
        res.status(400)
    )
})


// 


app.get('/' , (req,res) => {
    res.json({ok : 1})
})


// app.use(getprofileInfo)
// app.use(getpinnedPosts)
// app.use(getpostlists)
// app.use(getpackageLists)

// app.post('/upload')
// app.post('/save')

// app.post('/newPackage')

// app.get('/profileInfo')
// app.get('/pinnedPost')
// app.get('/posts')
// //header 값에 따라서 tag / package 별로
// app.get('/posts/package')
// app.get('posts/tag')

// app.get('/packages')

// app.get('/post')


app.listen(port , () => console.log(`✅${port}포트에서 서버 작동중`))