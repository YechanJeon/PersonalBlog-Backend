const router = require('express').Router()

const multer = require('multer')
const multerS3 = require('multer-s3')

const aws = require('aws-sdk')

// require('../config/s3.json')
aws.config.loadFromPath(__dirname+'/../config/s3.json')
const s3 = new aws.S3();

const imageUpload = multer({
    storage: multerS3({
        s3 : s3,
        bucket : 'yechan-personalblog',
        acl : 'public-read',
        key: function(req, file, cb){
            cb(null, Date.now() + '.' + file.originalname.split('.').pop()); // 이름 설정
        }
    })
})

const upload = multer({ dest: 'uploads/' })

// const imageStroage = multer.diskStorage({
//     destination : (req,file,callback) => {
//         callback(null , 'Image/');
//     },
//     filename : (req,file,callback) => {
//         callback(null , `${Date.now()}.${file.mimetype.split('/')[1]}`)//${nowDate}
//     }
// })

// const imageUpload = multer({storage : imageStroage})

const postInfos  = require('../controller/postInfos')

module.exports = {
    postPost : router.post('/post' , upload.single('file') , postInfos.postPost),
    postSavePost : router.post('/savePost' , upload.single('file') , postInfos.postSavePost),
    postPackage : router.post('/package' , postInfos.postPackage),
    postPinned : router.post('/pinned' , postInfos.postPinned),
    postImage : router.post('/image' , imageUpload.single('image') , postInfos.postImage)
}