const postsModel = require('../models/postsModel')
const userInfoModel = require('../models/userInfoModel')
const pinnedPostsModel = require('../models/pinnedPostsModel')
const packagesModel = require('../models/packagesModel')

const savedPostsModel = require('../models/savedPostsModel')


module.exports = {
    getPosts : async(req,res) => {
        res.send((await postsModel.find()).reverse())
    },

    getPost : async(req,res) => {
        res.send(await postsModel.findOne({key : +req.params.key}))
    },
    getPostsByPackage : async (req,res) => {
        res.send(await postsModel.find({package : req.params.package}))
    },

    getSavedPosts : async(req,res) => {
        res.send((await savedPostsModel.find()).reverse())
    },
    getSavedPost : async(req,res) => {
        res.send(await savedPostsModel.findOne({key : +req.params.key}))
    },

    getPinnedPosts : async(req,res) => {
        // res.send(await pinnedPostsModel.find())


        const pinnedPostsModelFind = await pinnedPostsModel.find()

        res.send(await Promise.all(pinnedPostsModelFind.map(async (e) => {
            let pinnedPost = await postsModel.findOne({key : e["post-key"]})
            pinnedPost.key = e.key
            return pinnedPost
        })))
        

    },

    getPackages : async(req,res) => {
        res.send((await packagesModel.find()).reverse())
    },
    getPackage: async(req,res) =>{
        res.send(await packagesModel.findOne({key : +req.params.key}))
    },

    getUserInfo : async(req,res) => {
        res.send(await userInfoModel.findOne({userId : req.params.userId}))
    },

}