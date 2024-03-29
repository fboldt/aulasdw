import { getAllPosts, insertPost, deletePost } from "../api/post.js"
import { login, signin, mudaSenha } from "../api/auth.js"
import { authenticate } from "../middlewares/token.js"
import express from 'express'
const router = express.Router()

router.post("/login", login)

router.put("/login", signin)

router.put("/senha", authenticate, mudaSenha)

router.get("/", getAllPosts)

router.post("/post", authenticate, insertPost)

router.delete("/post", authenticate, deletePost)

export default router