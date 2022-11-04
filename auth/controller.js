const jwt = require('jsonwebtoken')
const { setUser, getPass } = require('./persist')

const login = (req, res) => {
    const { username, password } = req.body
    if (getPass(username) == password) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_LIFETIME })
        return res.status(200).json({ username, token })
    }
    return res.status(401).json({})
}

const logout = (req, res) => {
    return res.status(200).json({ username: null, token: null })
}

const signin = (req, res) => {
    const { username, password } = req.body
    if (getPass(username) != null) {
        return res.status(300).json({ "msg": "user exists" })
    }
    const success = setUser(username, password)
    if (success) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_LIFETIME })
        return res.status(200).json({ username, token })
    } else {
        return res.status(300).json({ "msg": "fail" })
    }
}

module.exports = {
    login,
    logout,
    signin,
}
