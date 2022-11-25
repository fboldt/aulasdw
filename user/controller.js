const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const User = require('./model')

const signin = async (req, res) => {
    const { username, password } = req.body
    const user = new User(username, password)
    const token = jwt.sign({ "userId": user._id, username }, process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_LIFETIME })
    res.status(StatusCodes.CREATED).json({
        "username": username,
        "token": token
    })
}

module.exports = {
    signin,
}
