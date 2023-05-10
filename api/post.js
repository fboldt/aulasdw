import { listPosts } from "../controllers/post.js"

async function getAllPosts(req, res) { 
    const posts = await listPosts()
    return res.json(posts)
}

export { getAllPosts }