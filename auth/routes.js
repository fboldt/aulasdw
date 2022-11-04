const express = require('express')
const router = express.Router()
const { login, logout, signin } = require('./controller')

router.post('/', login)
router.get('/', logout)
router.put('/', signin)

module.exports = router
