import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get("/", (req, res) => { res.render("home") })
app.get("/sobre", (req, res) => { res.render("sobre") })

app.use(express.static('./public'))
app.use((req, res) => { res.render("404") })
app.use((err, req, res, next) => { res.render("500") })

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`\n\nListen on port ${port}.`)
})

