const pinnedPostsModel = require('../models/pinnedPostsModel')
const savedPostsModel = require('../models/savedPostsModel')
const packagesModel = require('../models/packagesModel')
const postsModel = require("../models/postsModel")

const findKey = require('../controller/findKey')

module.exports = {
    removePinened : async (req,res) => {
        if((await (await pinnedPostsModel.deleteOne({'post-key' : +req.body['post-key']})).deletedCount) === 1){
            res.send({
                ok : 1
            })
        }else{
            res.status(400).send({
                ok : 0,
                msg : '고정되지 않은 게시물'
            })
        }
    },
    removeSavedPost : async (req , res) => {
        if((await (await savedPostsModel.deleteOne({'key' : +req.body.key})).deletedCount) === 1){
            res.send({
                ok : 1
            })
        }else{
            res.status(400).send({
                ok : 0,
                msg : '존재하지 않는 저장된 게시글'
            })
        }
    },
    removePost : async (req,res) => {
        if((await (await postsModel.deleteOne({'key' : +req.body.key})).deletedCount) === 1){
            res.send({
                ok : 1
            })
        }else{
            res.status(400).send({
                ok : 0,
                msg : '존재하지 않는 게시글'
            })
        }
    },
    updatePost : async (req,res) => {
        // console.log(req.body.key)
        // console.log(req.body.post)
        let editedPost = Object.assign({} , req.body.post)

        // console.log(editedPost)

        // //title description tags content package (color / name)
        await postsModel.updateOne({'key' : +req.body.key} , editedPost , err => {
            if(err){
                res.status(400)
            }else{
                res.status(200)
            }
        })
    },
    removePackage : async (req,res) => {
        if((await (await packagesModel.deleteOne({'key' : +req.body.key})).deletedCount) === 1){
            res.send({
                ok : 1
            })
        }else{
            res.status(400).send({
                ok : 0,
                msg : '존재하지 않는 프로젝트'
            })
        }
    },
    updatePackage : async (req,res) => {
        // req.body.key
        
        await packagesModel.updateOne({'key' : req.body.key} , req.body.package , err => {
            if(err){
                res.status(400)
            }else{
                res.status(200)
            }
        })
    },
    
}