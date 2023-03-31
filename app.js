import express from 'express'
import { engine } from 'express-handlebars'
import basicRoutes from './routes/basic.js'

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use("/", basicRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`\n\nListen on port ${port}.`)
})

export default app
