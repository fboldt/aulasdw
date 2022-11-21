const express = require('express')
const router = express.Router()
const authenticate = require('../auth/middleware')
const { getAllPosts, createPost, deletePost } = require('./controller')

router.get('/', getAllPosts)
router.post('/', authenticate, createPost)
router.delete('/:id', authenticate, deletePost)

module.exports = router
