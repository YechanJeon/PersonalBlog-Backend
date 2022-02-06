const router = require('express').Router()

const postInfos  = require('../controller/postInfos')

module.exports = {
    postPost : router.post('/post' , postInfos.postPost),
    postPackage : router.post('/package'),
    postPinned : router.post('pinned')
}