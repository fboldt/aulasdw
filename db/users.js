import { readFileSync, writeFileSync } from "fs"
const usersfile = "./db/users.json"

import { executeQuery } from "./connect.js"

async function getUser(email) {
    const query = `SELECT * FROM users WHERE email = '${email}';`
    const rows = await executeQuery(query)
    if (rows.length > 0) {
        return rows[0]
    }
    return null
}

async function insertUser(email, senha) {
    const query = `INSERT INTO users (email, senha) VALUES ($1, $2)`
    const values = [email, senha]
    return await executeQuery(query, values)
}

async function saveUser(email, senha) {
    const query = `UPDATE users SET senha = $2 WHERE email = $1`
    const values = [email, senha]
    return await executeQuery(query, values)
}

export { getUser, insertUser, saveUser }