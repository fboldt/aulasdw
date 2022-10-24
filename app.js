require('dotenv').config()
const express = require('express')
const app = express()
const authRoutes = require('./auth/routes')
const quoteRoutes = require('./quote/routes')
const authenticate = require('./auth/middleware')

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/login', authRoutes)
app.use('/quote', authenticate, quoteRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listen on port ${port}.`)
})
