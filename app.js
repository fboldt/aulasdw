const express = require('express')
const app = express()

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === 'alice' && password === '123' 
     || username === 'bruce' && password === '234') {
        return res.json({'username': username})
    }
    return res.json({'username': ''})
})

app.get('/logout', (req, res) => {
    return res.redirect('/')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listen on port ${port}.`)
})
