import express from 'express'
const router = express.Router()
import handlers from '../handlers/basic.js'

router.get("/", handlers.home)

router.get("/sobre", handlers.sobre)

router.use(express.static('./public'))

router.use(handlers.notFound)

router.use(handlers.serverError)

export default router
