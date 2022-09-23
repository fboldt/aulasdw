const jwt = require('jsonwebtoken')

const login = (req, res) => {
    const { username, password } = req.body
    if (username === 'alice' && password === '123' ||
        username === 'bruce' && password === '234') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_LIFETIME })
        return res.status(200).json({ username, token })
    }
    return res.status(401).json({})
}

const logout = (req, res) => {
    return res.status(200).json({ username: null, token:null })
}

module.exports = {
    login,
    logout,
}
