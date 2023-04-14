import express from 'express'
const router = express.Router()
import handlers from '../handlers/signin.js'

router.post("/", handlers.action)

router.get("/", handlers.form)

export default router
