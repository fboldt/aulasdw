const { StatusCodes } = require('http-status-codes')
const Post = require('./model')

const getAllPosts = async (req, res) => {
    const posts = await Post.find()
    res.status(StatusCodes.OK).json({ posts })
}

const createPost = async (req, res) => {
    const post = new Post(req.body.textContent, req.user.username, req.user.userId)
    const saved = await post.save()
    if (!saved) {
        return res.status(StatusCodes.EXPECTATION_FAILED).json({ success: false })
    }
    return res.status(StatusCodes.CREATED).json({ post })
}

const deletePost = async (req, res) => {
    const {
        user: { userId },
        params: { id: postId },
    } = req
    const post = await Post.findByIdAndRemove(postId, userId)
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