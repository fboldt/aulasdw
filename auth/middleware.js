const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(StatusCodes.UNAUTHORIZED).json({"error": "Authetication Failure"})
    }
    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { "userId": payload.userId, "username": payload.username }
        next()
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ "error": "Authetication Failure" })
    }
}

module.exports = authenticate
