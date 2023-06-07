import { listPosts, insertPost as insertPostCtrl, deletePost as deletePostCtrl } from "../controllers/post.js"

async function getAllPosts(req, res) { 
    const posts = await listPosts()
    return res.json(posts)
}

async function insertPost(req, res) {
    const { email, text } = req.body
    const result = await insertPostCtrl(email, text)
    return res.json({ "success": true })
}

async function deletePost (req, res) {
    const { email } = req.user
    const id = req.query.id
    await deletePostCtrl(email, id)
    return res.json({ "success": true })
}

export { getAllPosts, insertPost, deletePost }