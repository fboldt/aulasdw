import jwt from 'jsonwebtoken'

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.json({ "error": "Authetication Failure" })
    }
    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { "email": payload.email }
        if (req.user)
            next()
        else return res.json({ "error": "Authetication Failure" })
    } catch (error) {
        return res.json({ "error": "Authetication Failure" })
    }
}

export { authenticate }