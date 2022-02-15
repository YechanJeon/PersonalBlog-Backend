const router = require('express').Router()

const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

const date = new Date()
const nowDate = [date.getFullYear , date.getMonth , date.getDate , date.getHours , date.getMinutes , date.getSeconds].join('')

const imageStroage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null , 'Image/');
    },
    filename : (req,file,callback) => {
        callback(null , `${req.body.imageName}.${file.mimetype.split('/')[1]}`)//${nowDate}
    }
})

const imageUpload = multer({storage : imageStroage})

const postInfos  = require('../controller/postInfos')

module.exports = {
    postPost : router.post('/post' , upload.single('file') , postInfos.postPost),
    postSavePost : router.post('/savePost' , upload.single('file') , postInfos.postSavePost),
    postPackage : router.post('/package' , postInfos.postPackage),
    postPinned : router.post('/pinned' , postInfos.postPinned),
    postImage : router.post('/image' , imageUpload.single('image') , postInfos.postImage)
}