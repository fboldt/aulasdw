const login = (req, res) => {
    const { username, password } = req.body
    if (username === 'alice' && password === '123' 
     || username === 'bruce' && password === '234') {
        return res.status(200).json({ username })
    }
    return res.status(401).json({ })
}

const logout = (req, res) => {
    return res.status(200).json({ })
}

module.exports = {
    login,
    logout,
}
