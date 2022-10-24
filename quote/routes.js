const express = require("express")
const router = express.Router()
const { quote } = require('./controller')

router.get('/', quote)

module.exports = router
