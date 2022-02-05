const express = require('express')

const dbConfig = require('./controller/dbConfig')

const app = express()  

const port = 80

const getInfos = require('./router/getInfos')

const {getPinnedPost} = require('./router/getInfos')


dbConfig()

app.use(getPinnedPost)

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