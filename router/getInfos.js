const mongoose = require('mongoose')

const router = require('express').Router()

const postsModel = require('../models/postsModel')
const userInfoModel = require('../models/userInfoModel')
const pinnedPostsModel = require('../models/pinnedPostsModel')
const packagesModel = require('../models/packagesModel')

module.exports = {
    getPinnedPost : router.get('/pinnedPost', 
    async (req,res) =>{
        res.json({ok : 1})
        // await postModel.find({pinned : true})
    })
}