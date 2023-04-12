import { getUser } from "./user.js"

function verificaCredenciais(email, senha) {
    const user = getUser(email)
    if (user) return senha == user.senha
    return false
}

export { verificaCredenciais }