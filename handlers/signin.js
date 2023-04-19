import { insertUser, changePassword } from "../controllers/user.js"
const handlers = {}

handlers.action = (req, res) => {
    const { email, senha } = req.body
    const result = insertUser(email, senha)
    if (result.success) {
        return res.render("signinsuccess")
    }
    return res.render("signinfail", { "msg": result.msg })
}

handlers.form = (req, res) => {
    res.locals.cadastro = true
    res.render("signinform")
}

handlers.formsenha = (req, res) => {
    res.locals.cadastro = true
    res.render("trocasenha")
}

handlers.actionsenha = (req, res) => {
    const { email, senha } = req.body
    const result = changePassword(email, senha)
    if (result.success) {
        return res.render("senhatrocada")
    }
    return res.render("trocasenhafail", { "msg": result.msg })
}

export default handlers