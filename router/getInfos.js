const mongoose = require('mongoose')

const router = require('express').Router()

const getInfos = require('../controller/getInfos')

module.exports = {
    getPosts : router.get('/posts' , getInfos.getPosts),
    getPost : router.get('/post/:key' , getInfos.getPost),
    getPostsByPackage : router.get('/packagePost/:package' , getInfos.getPostsByPackage),
    getPostsByTag : router.get('/tagPosts/:tag' , getInfos.getPostsByTag),
    getSavedPosts : router.get('/savedPosts' , getInfos.getSavedPosts),
    getSavedPost : router.get('/savedPost/:key' , getInfos.getSavedPost),
    getPinnedPosts : router.get('/pinnedPost' , getInfos.getPinnedPosts),
    getPackages : router.get('/packages' , getInfos.getPackages),
    getPackage : router.get('/package/:key' , getInfos.getPackage),
    getUserInfo : router.get('userInfo/:userId' , getInfos.getUserInfo),
    getTags : router.get('/tags' , getInfos.getTags),
    getPinnedCheck : router.get('/pinnedCheck/:postKey' , getInfos.getPinnedCheck)
}