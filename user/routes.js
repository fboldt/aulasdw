const express = require('express')
const router = express.Router()
const { signin } = require('./controller')

router.put('/', signin)

module.exports = router
