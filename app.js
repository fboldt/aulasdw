require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// ROUTES
const authRoutes = require('./auth/routes')
app.use('/login', authRoutes)

const userRoutes = require('./user/routes')
app.use('/signin', userRoutes)

const quoteRoutes = require('./quote/routes')
const authenticate = require('./auth/middleware')
app.use('/quote', authenticate, quoteRoutes)

const postRoutes = require('./post/routes')
app.use('/post', postRoutes)

//APP
const port = process.env.PORT || 3000
const start = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI).catch(err => console.log(err))
        app.listen(port, () => {
            console.log(`Listen on port ${port}.`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
