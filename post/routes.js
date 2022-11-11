const express = require('express')
const router = express.Router()
const authenticate = require('../auth/middleware')
const { getAllPosts, createPost } = require('./controller')

router.get('/', getAllPosts)
router.post('/', authenticate, createPost)

module.exports = router
