import express from 'express'
const router = express.Router()

router.get("/", (req, res) => { res.render("home") })

router.get("/sobre", (req, res) => { res.render("sobre") })

router.use(express.static('./public'))

router.use((req, res) => { res.render("404") })

router.use((err, req, res, next) => { res.render("500") })

export default router
