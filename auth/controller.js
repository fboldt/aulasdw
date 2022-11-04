const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const { setUser, getPass } = require('./persist')

const login = (req, res) => {
    const { username, password } = req.body
    if (getPass(username) == password) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_LIFETIME })
        return res.status(StatusCodes.OK).json({ username, token })
    }
    return res.status(StatusCodes.FORBIDDEN).json({})
}

const logout = (req, res) => {
    return res.status(StatusCodes.OK).json({ username: null, token: null })
}

const signin = (req, res) => {
    const { username, password } = req.body
    if (getPass(username) != null) {
        return res.status(StatusCodes.CONFLICT).json({ "msg": "user exists" })
    }
    const success = setUser(username, password)
    if (success) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_LIFETIME })
        return res.status(StatusCodes.OK).json({ username, token })
    } else {
        return res.status(StatusCodes.CONFLICT).json({ "msg": "fail" })
    }
}

module.exports = {
    login,
    logout,
    signin,
}
