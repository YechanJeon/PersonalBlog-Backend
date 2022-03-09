const postsModel = require('../models/postsModel')
const savedPostsModel = require('../models/savedPostsModel')
const userInfoModel = require('../models/userInfoModel')
const pinnedPostsModel = require('../models/pinnedPostsModel')
const packagesModel = require('../models/packagesModel')
const findKey = require('../controller/findKey')

const fs = require('fs')
    

module.exports = {
    postPost : async (req,res) => {
        let newPost = new postsModel
        if(req.body.title === ''&&req.body.package === ''){
            res.status(400).json({
                ok : 0,
                msg : '빈값이 존재합니다.'
            })
        }else{
            if(req.file){
                newPost.content = fs.readFileSync(req.file.path , 'utf8')
            }else{
                newPost.content = req.body.content
            }
            newPost.title = req.body.title 
            newPost.package = +req.body.package
            newPost.tags = JSON.parse(req.body.tags)
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

    },
    postSavePost : async(req,res) => {
        let savePost = {}
        savePost = Object.assign({} , req.body)

        if(req.file){   
            savePost.content = fs.readFileSync(req.file.path , 'utf8')
        }
        let savePostModel = new savedPostsModel

        if(savePost.title !== ''){
            savePostModel.title = savePost.title
        }else{
            let now = new Date()
            savePostModel.title  = `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 저장된 게시글`
        }
        savePostModel.package = savePost.package
        savePostModel.content = savePost.content
        savePostModel.fileName = savePost.fileName
        savePostModel.tags = JSON.parse(savePost.tags)
        savePostModel.description = savePost.description
        
        savePostModel.key = await findKey(savedPostsModel)
        // save

        savePostModel.save(err => {
            if(err){
                res.status(400).json({
                    ok : 0,
                    msg : "저장중 에러"
                })
            }else{
                res.status(200).json({
                    ok : 1,
                })
            }
        })
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
            newPackage.description = req.body.description
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
            newPinned['post-key'] = +req.body['post-key']
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
    },
    postImage : async (req,res) => {
        if(req.file){
            res.send({
                ok : 1,
                img : req.file.key
            })
        }else{
            res.status(400).send({
                ok : 0,
                msg : '이미지 미업로드'
            })
        }
    }
}
/*
"tags" : [ "asdf", "qwer" ],
"title" : "블로그를 제작하며",
"package" : "1",
"content" : "#테스트 포스트",
"description" : "첫 풀스택 작업으로 개인 기술 블로그를 제작한 과정을 담은 글",

"tags": [],
"title": "맥북 초기화하기",
"package": "2",
"content": "#테스트 포스트",
"description": "맥북 초기화와 여러 개발환경 셋팅",

"tags": ["asdf", "qwer"],
"title": "임베디드 보드를 이용해 나스를 만들어보자",
"package": "3",
"content": "#테스트 포스트",
"description": "웹 기술을 기반으로한 우분투 나스 제작기",

"tags": [],
"title": "api 설명서 제작기",
"package": "4",
"content": "#테스트 포스트",
"description": "",
*/