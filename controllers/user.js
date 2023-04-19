import { getUser, saveUser as saveUserDB } from "../db/users.js"
import bcrypt from "bcrypt"
const saltRounds = 10;

function saveUser(email, senha) {
    const hash = bcrypt.hashSync(senha, saltRounds);
    const result = saveUserDB(email, hash)
    return result
}

function verificaCredenciais(email, senha) {
    const user = getUser(email)
    if (user) return bcrypt.compareSync(senha, user.senha)
    return false
}

export { saveUser, verificaCredenciais }