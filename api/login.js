import { checkCredentials } from "../controllers/user.js"

async function login(req, res) {
    const { email, senha } = req.body
    const success = await checkCredentials(email, senha)
    if (success) {
        req.session.username = email
        return res.json({ "success": true })
    } 
    return res.json({ "success": false })
}

export { login }