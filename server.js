const express = require('express')

const app = express()
const port = 80

app.use(express.json())

const {getPosts , getPost, getPinnedPosts , getPackages , getUserInfo} = require('./router/getInfos')
const {postPost} = require('./router/postInfos')

const dbConfig = require('./controller/dbConfig')

dbConfig()

app.use(getPosts)
app.use(getPost)
app.use(getPinnedPosts)
app.use(getPackages)
app.use(getUserInfo)

app.use(postPost)




// 

const postModel = require('./models/postsModel')

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