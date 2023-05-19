import { checkCredentials } from "../controllers/user.js"
import jwt from 'jsonwebtoken'

async function login(req, res) {
    const { email, senha } = req.body
    const success = await checkCredentials(email, senha)
    if (success) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
        return res.json({ success, email, token })
    } 
    return res.json({ success })
}

export { login }