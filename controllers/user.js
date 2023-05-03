import { getUser, saveUser, insertUser as insertUserDB } from "../db/users.js"
import bcrypt from "bcrypt"
const saltRounds = 10;

async function insertUser(email, senha) {
    const hash = bcrypt.hashSync(senha, saltRounds)
    let result =  { success: true, msg: "usuário cadastrado com sucesso" }
    try {
        await insertUserDB(email, hash)
    } catch (error) {
        result =  { success: false, msg: error }
    }
    return result
}

async function checkCredentials(email, senha) {
    const user = await getUser(email)
    if (user) return bcrypt.compareSync(senha, user.senha)
    return false
}

async function changePassword(email, senha) {
    const hash = bcrypt.hashSync(senha, saltRounds)
    const result = await saveUser(email, hash)
    if (result) return { success: true }
    return false
}

export { insertUser, checkCredentials, changePassword }