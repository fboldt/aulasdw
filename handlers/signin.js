import { insertUser, changePassword } from "../controllers/user.js"
const handlers = {}

handlers.action = async (req, res) => {
    const { email, senha } = req.body
    const result = await insertUser(email, senha)
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

handlers.actionsenha = async (req, res) => {
    const { email, senha } = req.body
    const result = await changePassword(email, senha)
    if (result.success) {
        return res.redirect("/")
    }
    return res.render("trocasenhafail", { "msg": result.msg })
}

export default handlers