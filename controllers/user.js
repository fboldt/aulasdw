import { getUser, saveUser, insertUser as insertUserDB } from "../db/users.js"
import bcrypt from "bcrypt"
const saltRounds = 10;

function insertUser(email, senha) {
    const hash = bcrypt.hashSync(senha, saltRounds)
    const result = insertUserDB(email, hash)
    return result
}

function verificaCredenciais(email, senha) {
    const user = getUser(email)
    if (user) return bcrypt.compareSync(senha, user.senha)
    return false
}

function changePassword(email, senha) {
    const hash = bcrypt.hashSync(senha, saltRounds)
    const result = saveUser(email, hash)
    return result
}

export { insertUser, verificaCredenciais, changePassword }