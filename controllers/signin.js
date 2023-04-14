import { saveUser as saveUserDB } from "../db/users.js"

function saveUser(email, senha) {
    const result = saveUserDB(email, senha)
    return result
}

export { saveUser }
