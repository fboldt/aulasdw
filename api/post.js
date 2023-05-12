import { listPosts, insertPost as insertPostCtrl, deletePost as deletePostCtrl } from "../controllers/post.js"

async function getAllPosts(req, res) { 
    const posts = await listPosts()
    return res.json(posts)
}

async function insertPost(req, res) {
    const { email, text } = req.body
    const user = res.locals.username
    if (user == email) {
        await insertPostCtrl(email, text)
        return res.json({ "success": true })
    }
    return res.json({ "success": false })
}

async function deletePost (req, res) {
    const user = res.locals.username
    const id = req.query.id
    await deletePostCtrl(user, id)
    return res.json({ "success": true })
}

export { getAllPosts, insertPost, deletePost }