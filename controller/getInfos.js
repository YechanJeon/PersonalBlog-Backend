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

    getPostsByTag : async(req,res) => {
        let tagPosts
        req.body.tags.map(async (e) => {
            await postModel.find({tags : e})
        })
    },

    getPinnedPosts : async(req,res) => {
        let pinnedPostLists = []
        await (await pinnedPostsModel.find()).map(
            async (e) => {
                pinnedPostLists.push(await postModel.findOne({key : e['post-key']}))
            }
        )
        res.send(pinnedPostLists)
    },

    getPackages : async(req,res) => {
        res.send(await packagesModel.find())
    },

    getUserInfo : async(req,res) => {
        res.send(await userInfoModel.findOne({userId : req.params.userId}))
    },

}