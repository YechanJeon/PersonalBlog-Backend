const router = require('express').Router()

const postInfos  = require('../controller/postInfos')

module.exports = {
    postPost : router.post('/post' , postInfos.postPost),
    postPackage : router.post('/package' , postInfos.postPackage),
    postPinned : router.post('/pinned' , postInfos.postPinned)
}