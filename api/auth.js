import { checkCredentials, insertUser, changePassword } from "../controllers/user.js"
import jwt from 'jsonwebtoken'

async function mudaSenha(req, res) {
    const { email, senha } = req.body
    const { success } = await changePassword(email, senha)
    return res.json({ success })
}

async function login(req, res) {
    const { email, senha } = req.body
    const success = await checkCredentials(email, senha)
    if (success) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
        return res.json({ success, email, token })
    } 
    return res.json({ success })
}

async function signin(req, res) {
    const { email, senha } = req.body
    const result = await insertUser(email, senha)
    if (result.success) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
        return res.json({ success: true, email, token })
    }
    return res.json({ success: false })
}

export { login, signin, mudaSenha }