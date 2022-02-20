const postsModel = require('../models/postsModel')
const userInfoModel = require('../models/userInfoModel')
const pinnedPostsModel = require('../models/pinnedPostsModel')
const packagesModel = require('../models/packagesModel')

const savedPostsModel = require('../models/savedPostsModel')


module.exports = {
    getPosts : async(req,res) => {
        let posts = ((await postsModel.find()).reverse())

        res.send(await Promise.all(posts.map(async (e) => {
            e.package = (await packagesModel.findOne({key : +e.package}))
            return e
        })))

    },

    getPost : async(req,res) => {
        let post = await postsModel.findOne({key : +req.params.key})
        post.package = await packagesModel.findOne({key : post.package})
        res.send(post)
    },
    getPostsByPackage : async (req,res) => {
        let posts = (await postsModel.find({package : req.params.package})).reverse()
        res.send(await Promise.all(posts.map(async (e) => {
            e.package = (await packagesModel.findOne({key : +e.package}))
            return e
        })))
    },
    getPostsByTag: async  (req,res) => {
        let posts = []
        await (await postsModel.find()).map(e => {
            if(e.tags.find(tag => tag.name === req.params.tag)){
                posts.push(e)
            }
            
        })
        res.send(await Promise.all(posts.map(async (e) => {
            e.package = (await packagesModel.findOne({key : +e.package}))
            return e
        })))
    }

    ,

    getSavedPosts : async(req,res) => {
        let posts = (await savedPostsModel.find()).reverse()

        res.send(await Promise.all(posts.map(async (e) => {
            if(e.package > 0){
                e.package = (await packagesModel.findOne({key : +e.package}))
            return e
            }else{
                e.package = {key : 0}
                return e
            }
        })))
    },
    getSavedPost : async(req,res) => {
        let post = (await savedPostsModel.findOne({key : +req.params.key}))
        if(post.package !== '0'){
            post.package = await packagesModel.findOne({key : +post.package})
        }else{
            post.package = {key : 0}
        }
        res.send(post)
    },

    getPinnedPosts : async(req,res) => {
        // res.send(await pinnedPostsModel.find())


        const pinnedPostsModelFind = await pinnedPostsModel.find()

        let posts = (await Promise.all(pinnedPostsModelFind.map(async (e) => {
            let pinnedPost = await postsModel.findOne({key : e["post-key"]})
            return pinnedPost
        })))

        res.send(await Promise.all(posts.map(async (e) => {
            e.package = (await packagesModel.findOne({key : +e.package}))
            return e
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