const express = require('express');
const { searchPost, getPosts, deletePost, updatePost, savePost } = require('../handlers/handler');
const router = express.Router();
const Post = require('../modal/postmodal')

router.post('/post',savePost)

router.post('/search',searchPost)

router.post('/posts',getPosts)



router.post('/delete',deletePost)

router.post('/update',updatePost)

module.exports = router;