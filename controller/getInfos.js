const postsModel = require('../models/postsModel')
const userInfoModel = require('../models/userInfoModel')
const pinnedPostsModel = require('../models/pinnedPostsModel')
const packagesModel = require('../models/packagesModel')


module.exports = {
    getPosts : async(req,res) => {
        res.send(await postsModel.find())
    },

    getPost : async(req,res) => {
        res.send(await postsModel.findOne({key : +req.params.key}))
    },
    getPostsByPackage : async (req,res) => {
        res.send(await postsModel.find({package : req.params.package}))
    },

    getPinnedPosts : async(req,res) => {
        res.send(await pinnedPostsModel.find())
    },

    getPackages : async(req,res) => {
        res.send(await packagesModel.find())
    },

    getUserInfo : async(req,res) => {
        res.send(await userInfoModel.findOne({userId : req.params.userId}))
    },

}