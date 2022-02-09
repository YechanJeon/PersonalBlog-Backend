const router = require('express').Router()

const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

const postInfos  = require('../controller/postInfos')

module.exports = {
    postPost : router.post('/post' , upload.single('file') , postInfos.postPost),
    postSavePost : router.post('/savePost' , upload.single('file') , postInfos.postSavePost),
    postPackage : router.post('/package' , postInfos.postPackage),
    postPinned : router.post('/pinned' , postInfos.postPinned)
}