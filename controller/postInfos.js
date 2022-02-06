const postsModel = require('../models/postsModel')
const userInfoModel = require('../models/userInfoModel')
const pinnedPostsModel = require('../models/pinnedPostsModel')
const packagesModel = require('../models/packagesModel')
const findKey = require('../controller/findKey')

module.exports = {
    postPost : async (req,res) => {
        const newPost = new postsModel
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

    },
    postPinned : async (req,res) => {

    }

}