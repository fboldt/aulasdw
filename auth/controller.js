const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const User = require('../user/model')

const login = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (user && user.comparePassword(password)) {
        const token = jwt.sign({ "userId": user._id, username }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_LIFETIME })
        return res.status(StatusCodes.OK).json({ username, token })
    }
    return res.status(StatusCodes.FORBIDDEN).json({})
}

const logout = (req, res) => {
    return res.status(StatusCodes.OK).json({ username: null, token: null })
}

module.exports = {
    login,
    logout,
}
