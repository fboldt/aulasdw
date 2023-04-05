import express from 'express'
const router = express.Router()
import handlers from '../handlers/login.js'

router.post("/", handlers.login)

router.get("/", handlers.logout)

export default router
