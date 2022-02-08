const mongoose = require('mongoose')

const router = require('express').Router()

const getInfos = require('../controller/getInfos')

module.exports = {
    getPosts : router.get('/posts' , getInfos.getPosts),
    getPost : router.get('/post/:key' , getInfos.getPost),
    getPostsByPackage : router.get('/packagePost/:package' , getInfos.getPostsByPackage),
    getPinnedPosts : router.get('/pinnedPost' , getInfos.getPinnedPosts),
    getPackages : router.get('/packages' , getInfos.getPackages),
    getPackage : router.get('/package/:key' , getInfos.getPackage),
    getUserInfo : router.get('userInfo/:userId' , getInfos.getUserInfo)
}