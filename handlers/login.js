import { verificaCredenciais } from "../controllers/user.js"
const handlers = {}

handlers.login = async (req, res) => {
    const { email, senha } = req.body
    const success = await verificaCredenciais(email, senha)
    if (success) {
        req.session.username = email
        res.redirect("/")
    } else {
        res.render("loginfail")
    }
 }

handlers.logout = (req, res) => { 
    if (req.session.username) {
        delete req.session.username
    }
    res.redirect("/")
 }

export default handlers