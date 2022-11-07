require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const authRoutes = require('./auth/routes')
const userRoutes = require('./user/routes')
const quoteRoutes = require('./quote/routes')
const authenticate = require('./auth/middleware')

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/login', authRoutes)
app.use('/signin', userRoutes)
app.use('/quote', authenticate, quoteRoutes)

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
