import { saveUser } from "../controllers/signin.js"
const handlers = {}

handlers.action = (req, res) => {
    const { email, senha } = req.body
    const result = saveUser(email, senha)
    if (result.success) {
        return res.render("signinsuccess")
    }
    return res.render("signinfail", { "msg": result.msg })
}

handlers.form = (req, res) => {
    res.locals.cadastro = true
    res.render("signinform")
}

export default handlers