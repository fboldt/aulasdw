const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const User = require('./model')

const signin = async (req, res) => {
    const user = await User.create({ ...req.body })
    const username = user.username
    const token = jwt.sign({ username }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_LIFETIME })
    res.status(StatusCodes.CREATED).json({
        "username": username,
        "token": token
    })
}

module.exports = {
    signin,
}
