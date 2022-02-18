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
    getPostsByTag: async  (req,res) => {
        let posts = []
        await (await postsModel.find()).map(e => {
            if(e.tags.find(tag => tag.name === req.params.tag)){
                posts.push(e)
            }
            
        })
        res.send(posts)
    }

    ,

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

    getTags : async(req,res) => {
        let tags = [];
        (await postsModel.find()).map(e => {
            e.tags.map(e => {
                if(e.name){
                    
                    if(!tags.find(ele => ele === e.name)){
                        tags.push(e.name)
                    }
                }
            })
        })
        res.send(tags)
    },

    getPinnedCheck : async(req,res) => {
        (await pinnedPostsModel.findOne({"post-key" : +req.params.postKey})) ? res.send(true) : res.send(false)
    }

}