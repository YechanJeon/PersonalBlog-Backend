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
    }
}