const router = require('express').Router()

const updateInfos = require('../controller/updateInfos')

module.exports = {
    removePinned : router.delete('/pinned' , updateInfos.removePinened),
    removeSavedPost : router.delete('/savePost' , updateInfos.removeSavedPost),
    removePost : router.delete('/post' , updateInfos.removePost),
    removePackage : router.delete('/package' , updateInfos.removePackage)
}