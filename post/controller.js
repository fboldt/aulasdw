const { StatusCodes } = require('http-status-codes')
const Post = require('./model')

const getAllPosts = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 })
    res.status(StatusCodes.OK).json({ posts })
}

const createPost = async (req, res) => {
    req.body.createdBy = req.user.userId
    req.body.author = req.user.username
    const post = await Post.create(req.body)
    res.status(StatusCodes.CREATED).json({ post })
}

const deletePost = async (req, res) => {
    const {
        user: { userId },
        params: { id: postId },
    } = req
    const post = await Post.findByIdAndRemove({
        _id: postId,
        createdBy: userId,
    })
    if (post) {
        return res.status(StatusCodes.OK).json({ 'success': 'true' })
    }
    return res.status(StatusCodes.NOT_FOUND).json({ 'success': 'false' })
}

module.exports = {
    getAllPosts,
    createPost,
    deletePost
}