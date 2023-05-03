import { listPosts } from "../controllers/post.js"

const handlers = {}

handlers.home = async (req, res) => { 
    const posts = await listPosts()
    res.render("home", { posts }) 
}

handlers.sobre = (req, res) => { res.render("sobre") }

handlers.notFound = (req, res) => { res.render("404") }

handlers.serverError = (err, req, res, next) => { res.render("500") }

export default handlers
