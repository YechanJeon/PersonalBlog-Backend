const postsModel = require('../models/postsModel')
const userInfoModel = require('../models/userInfoModel')
const pinnedPostsModel = require('../models/pinnedPostsModel')
const packagesModel = require('../models/packagesModel')
const findKey = require('../controller/findKey')

module.exports = {
    postPost : async (req,res) => {
        let newPost = new postsModel
        if(req.body.title === '' , req.body.package === '' , req.body.content === ''){
            res.status(400).json({
                ok : 0,
                msg : '빈값이 존재합니다.'
            })
        }else{
            newPost.title = req.body.title 
            newPost.package = req.body.package
            newPost.content = req.body.content
            newPost.tags = req.body.tags
            newPost.description = req.body.description
            
            newPost.key = await findKey(postsModel)
            newPost.date = new Date()
            newPost.author = 'YechanJeon'

            newPost.save(err => {
                if(err){
                    res.status(400).json({
                        ok : 0,
                        msg : '저장중 에러'
                    })
                }else{
                    res.status(200).json({
                        ok : 1,
                    })
                }
            })
        }

        // console.log(req.body)

    },
    postPackage : async (req,res) => {
        let newPackage = new packagesModel
        if(req.body.name === '',req.body.color ===''){
            res.status(400).json({
                ok : 0,
                msg : '빈값 존재'
            })
        }else{
            newPackage.name = req.body.name
            newPackage.color = req.body.color
            newPackage.key = await findKey(packagesModel)
            newPackage.save(err => {
                if(err){
                    res.status(400).json({
                        ok : 0,
                        msg : '저장중 에러',
                        err : err
                    })
                }else{
                    res.status(200).json({
                        ok : 1
                    })
                }
            })
        }
    }, 
    postPinned : async (req,res) => {
        let newPinned = new pinnedPostsModel
        if(req.body['post-key']===''){
            res.status(400).json({
                ok: 0,
                msg : '저장할 postkey를 작성해주세요.'
            })
        }else{
            newPinned['post-key'] = req.body['post-key']
            newPinned.key = await findKey(pinnedPostsModel)
            newPinned.save(err => {
                if(err){
                    res.status(400).json({
                        ok : 0,
                        msg : '저장중 에러',
                        err : err
                    })
                }else{
                    res.status(200).json({
                        ok : 1
                    })
                }
            })
        }
    }
}