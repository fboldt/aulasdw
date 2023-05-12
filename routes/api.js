import { getAllPosts, insertPost, deletePost } from "../api/post.js"
import { login } from "../api/login.js"
import express from 'express'
const router = express.Router()

router.post("/login", login)

router.get("/", getAllPosts)

router.post("/post", insertPost)

router.delete("/post", deletePost)

export default router