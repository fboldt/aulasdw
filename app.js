import express from 'express'
import { engine } from 'express-handlebars'
import expressSession from 'express-session'
import { getSessionUser } from './middlewares/login.js'
import basicRoutes from './routes/basic.js'
import loginRoutes from './routes/login.js'
import signinRoutes from './routes/signin.js'
import postRoutes from './routes/post.js'
import apiRoutes from './routes/api.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
}))
app.use(getSessionUser)
app.use(express.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use("/api", apiRoutes)
app.use("/login", loginRoutes)
app.use("/signin", signinRoutes)
app.use("/post", postRoutes)
app.use("/", basicRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`\n\nListen on port ${port}.`)
})

export default app
