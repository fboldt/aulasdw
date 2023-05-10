import { getAllPosts } from "../api/post.js"
import express from 'express'
const router = express.Router()

router.get("/", getAllPosts)

export default router