require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const auth = require('./auth/routes')
app.use('/login', auth)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listen on port ${port}.`)
})
