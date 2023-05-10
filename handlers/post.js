import { insertPost, deletePost } from "../controllers/post.js"

const handlers = {}

handlers.insertPost = async (req, res) => {
    const { email, text } = req.body
    const user = res.locals.username
    if (user == email) {
        await insertPost(email, text)
    }
    res.redirect("/")
}

handlers.deletePost = async (req, res) => {
    const user = res.locals.username
    const id = req.query.id
    await deletePost(user, id)
    res.redirect("/")
}

export default handlers
