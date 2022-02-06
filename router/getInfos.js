const mongoose = require('mongoose')

const router = require('express').Router()

const getInfos = require('../controller/getInfos')

module.exports = {
    getPosts : router.get('/posts' , getInfos.getPosts),
    getPost : router.get('/post/:key' , getInfos.getPost),
    getPinnedPosts : router.get('/pinnedPost' , getInfos.getPinnedPosts),
    getPackages : router.get('packages' , getInfos.getPackages),
    getUserInfo : router.get('userInfo/:userId' , getInfos.getUserInfo)
}