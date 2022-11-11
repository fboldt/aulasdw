const { StatusCodes } = require('http-status-codes')
const Post = require('./model')

const getAllPosts = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 })
    res.status(StatusCodes.OK).json({ posts })
}

const createPost = async (req, res) => {
    req.body.createdBy = req.user.UserId
    req.body.author = req.user.username
    const post = await Post.create(req.body)
    res.status(StatusCodes.CREATED).json({ post })
}

module.exports = {
    getAllPosts,
    createPost
}