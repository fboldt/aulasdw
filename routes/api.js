import { getAllPosts, insertPost, deletePost } from "../api/post.js"
import { login } from "../api/login.js"
import { authenticate } from "../middlewares/token.js"
import express from 'express'
const router = express.Router()

router.post("/login", login)

router.get("/", getAllPosts)

router.post("/post", authenticate, insertPost)

router.delete("/post", authenticate, deletePost)

export default router