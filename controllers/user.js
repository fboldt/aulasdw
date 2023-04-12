import { getUser as getUserFromDB } from "../db/users.js"

function getUser(email) {
    return getUserFromDB(email)
}

export { getUser }