import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// app.use(express.static('./public'))

app.get("/", (req, res) => { res.render("home") })
app.get("/sobre", (req, res) => { res.send("sobre") })
app.use((req, res) => { res.send("404") })
app.use((err, req, res, next) => { res.send("500") })

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`\n\nListen on port ${port}.`)
})

